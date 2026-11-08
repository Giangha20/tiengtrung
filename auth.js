/* ============================================================
   FIREBASE AUTH + CLOUD PROGRESS
   Bản ổn định cho GitHub Pages / static hosting.
   ============================================================ */
(function () {
    const config = window.FIREBASE_CONFIG || {};
    const isConfigured = !!(
        config.apiKey && !String(config.apiKey).startsWith('YOUR_') &&
        config.authDomain && !String(config.authDomain).startsWith('YOUR_') &&
        config.projectId && !String(config.projectId).startsWith('YOUR_') &&
        config.appId && !String(config.appId).startsWith('YOUR_')
    );

    let auth = null;
    let db = null;
    let currentUser = null;
    let progressCache = {};
    let progressLoaded = false;
    let authStateKnown = false;
    let resolveReady;

    // Promise chỉ hoàn tất sau khi Firebase đã báo trạng thái đăng nhập lần đầu.
    window.ghAuthReady = new Promise(resolve => { resolveReady = resolve; });
    window.ghAuthReadyResolve = function (user) {
        if (authStateKnown) return;
        authStateKnown = true;
        resolveReady(user || null);
    };

    function configError() {
        return new Error('Chưa cấu hình Firebase. Hãy kiểm tra firebase-config.js.');
    }

    async function loadProgress(user) {
        if (!user || !db) {
            progressCache = {};
            progressLoaded = false;
            return {};
        }
        try {
            const ref = db.collection('users').doc(user.uid);
            const snap = await ref.get();
            const data = snap.exists ? (snap.data() || {}) : {};
            progressCache = (data.progress && typeof data.progress === 'object') ? data.progress : {};
            progressLoaded = true;
            window.dispatchEvent(new CustomEvent('gh-progress-loaded', { detail: { progress: progressCache } }));
            return progressCache;
        } catch (error) {
            console.error('Không thể tải tiến trình online:', error);
            progressCache = {};
            progressLoaded = false;
            throw error;
        }
    }

    function getLegacyProgressForUser(user) {
        try {
            const rawAll = localStorage.getItem('gh_hsk_progress_v1');
            const all = rawAll ? JSON.parse(rawAll) : {};
            const rawSession = localStorage.getItem('gh_hsk_session_v1') || sessionStorage.getItem('gh_hsk_session_v1');
            const session = rawSession ? JSON.parse(rawSession) : null;
            const keys = [];
            if (user.email) keys.push(user.email.toLowerCase());
            if (user.displayName) keys.push(user.displayName);
            if (session?.email) keys.push(session.email.toLowerCase());
            if (session?.username) keys.push(session.username);
            for (const key of keys) {
                if (key && all[key] && typeof all[key] === 'object') return all[key];
            }
            for (const [key, value] of Object.entries(all)) {
                if (user.email && key.toLowerCase() === user.email.toLowerCase()) return value;
                if (user.displayName && key.toLowerCase() === String(user.displayName).toLowerCase()) return value;
            }
        } catch (error) {
            console.warn('Không đọc được tiến trình cũ:', error);
        }
        return null;
    }

    async function migrateLegacyProgress(user) {
        if (!user || !db || !progressLoaded || Object.keys(progressCache).length) return false;
        const legacy = getLegacyProgressForUser(user);
        if (!legacy || typeof legacy !== 'object' || !Object.keys(legacy).length) return false;
        try {
            const merged = { ...legacy, migratedFromLocalStorage: true, migratedAt: new Date().toISOString() };
            await db.collection('users').doc(user.uid).set({
                progress: merged,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            progressCache = merged;
        } catch (error) {
            console.warn('Không thể chuyển tiến trình cũ lên Firebase:', error);
        }

        // Migrate local learningEngine XP & level if present and higher
        try {
            const rawEngine = localStorage.getItem('gh_learning_engine_v1');
            const localEngine = rawEngine ? JSON.parse(rawEngine) : null;
            if (localEngine && typeof localEngine === 'object') {
                const cloudXp = Number(progressCache?.learningEngine?.xp) || 0;
                const localXp = Number(localEngine.xp) || 0;
                if (localXp > cloudXp) {
                    await saveProgress({ learningEngine: localEngine });
                }
            }
        } catch (e) {
            console.warn('Không thể migrate learningEngine:', e);
        }
        return true;
    }

    async function saveProgress(patch) {
        if (!currentUser || !db || !patch || typeof patch !== 'object') return false;

        // Bảo vệ tiến trình: Không bao giờ cho phép lưu đè XP hoặc Level thấp hơn
        if (patch.learningEngine && progressCache?.learningEngine) {
            const curXp = Number(progressCache.learningEngine.xp) || 0;
            const newXp = Number(patch.learningEngine.xp) || 0;
            if (newXp < curXp) {
                patch.learningEngine.xp = curXp;
                patch.learningEngine.level = Math.max(progressCache.learningEngine.level || 1, patch.learningEngine.level || 1);
                patch.learningEngine.highestLevel = Math.max(progressCache.learningEngine.highestLevel || 1, patch.learningEngine.highestLevel || 1);
            }
        }

        const next = { ...progressCache, ...patch, updatedAt: new Date().toISOString() };
        progressCache = next;
        try {
            await db.collection('users').doc(currentUser.uid).set({
                progress: next,
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            return true;
        } catch (error) {
            console.error('Không thể lưu tiến trình online:', error);
            return false;
        }
    }

    async function deleteProgress() {
        if (!currentUser || !db) return false;
        try {
            await db.collection('users').doc(currentUser.uid).set({
                progress: {},
                updatedAt: firebase.firestore.FieldValue.serverTimestamp()
            }, { merge: true });
            progressCache = {};
            return true;
        } catch (error) {
            console.error('Không thể xóa tiến trình online:', error);
            return false;
        }
    }

    async function saveFavorite(wordId, data = {}) {
        if (!currentUser || !db) return false;
        const id = String(wordId || '').trim();
        if (!id) return false;
        await db.collection('users').doc(currentUser.uid).collection('favorites').doc(id).set({
            wordId: id, ...data, updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        return true;
    }

    async function removeFavorite(wordId) {
        if (!currentUser || !db) return false;
        const id = String(wordId || '').trim();
        if (!id) return false;
        await db.collection('users').doc(currentUser.uid).collection('favorites').doc(id).delete();
        return true;
    }

    async function saveNote(wordId, note) {
        if (!currentUser || !db) return false;
        const id = String(wordId || '').trim();
        if (!id) return false;
        await db.collection('users').doc(currentUser.uid).collection('notes').doc(id).set({
            wordId: id, note: String(note || ''), updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        return true;
    }

    async function createProfile(user, username) {
        if (!db || !user) return;
        await db.collection('users').doc(user.uid).set({
            uid: user.uid,
            email: user.email || '',
            username: username || user.displayName || '',
            displayName: username || user.displayName || '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    }

    async function getProfile(user = currentUser) {
        if (!db || !user) return null;
        const snap = await db.collection('users').doc(user.uid).get();
        return snap.exists ? snap.data() : null;
    }

    async function register(email, password, username) {
        if (!auth || !isConfigured) throw configError();
        const credential = await auth.createUserWithEmailAndPassword(email.trim().toLowerCase(), password);
        if (username) {
            try { await credential.user.updateProfile({ displayName: username.trim() }); }
            catch (e) { console.warn('Không cập nhật được displayName:', e); }
        }
        // Tạo profile Firestore là bước phụ. Nếu Rules/Firestore chưa sẵn sàng,
        // tài khoản Firebase Auth vẫn phải được tạo thành công.
        try {
            await createProfile(credential.user, username);
        } catch (profileError) {
            console.warn('Không tạo được profile Firestore, nhưng tài khoản Auth đã tạo:', profileError);
        }
        // Luồng đăng ký của web: đăng ký xong -> quay lại đăng nhập.
        await auth.signOut();
        return credential.user;
    }

    async function login(email, password) {
        if (!auth || !isConfigured) throw configError();
        // Luôn dùng persistence LOCAL để phiên đăng nhập còn sau khi đổi trang/mở lại web.
        try { await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); } catch (e) { console.warn('Không đặt được persistence:', e); }
        const credential = await auth.signInWithEmailAndPassword(email.trim().toLowerCase(), password);
        // signInWithEmailAndPassword đã xác nhận tài khoản thành công.
        // Không chờ Firestore/Auth listener thêm để tránh cảm giác nút bị treo.
        currentUser = credential.user;
        window.ghCurrentUser = currentUser;
        // Đánh dấu phiên đăng nhập để PWA có thể chờ Firebase khôi phục phiên
        // khi mở từ biểu tượng màn hình chính. Không lưu email/mật khẩu/token.
        try { localStorage.setItem('gh_pwa_login_marker_v2', String(Date.now())); } catch (e) {}
        return credential.user;
    }

    async function logout() {
        if (!auth) return;
        await auth.signOut();
        try { localStorage.removeItem('gh_pwa_login_marker_v2'); } catch (e) {}
    }

    async function bootstrap() {
        window.ghFirebaseConfigured = false;
        if (!isConfigured) {
            console.error('Firebase config chưa đầy đủ.');
            window.ghAuthReadyResolve(null);
            return;
        }
        if (!window.firebase) {
            console.error('Firebase SDK chưa được tải.');
            window.ghAuthReadyResolve(null);
            return;
        }
        try {
            if (!firebase.apps.length) firebase.initializeApp(config);
            auth = firebase.auth();
            db = firebase.firestore();
            window.ghFirebaseConfigured = true;

            // Đảm bảo persistence trước khi đăng ký listener.
            try { await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); } catch (e) { console.warn('Firebase persistence:', e); }

            auth.onAuthStateChanged(async (user) => {
                currentUser = user || null;
                window.ghCurrentUser = currentUser;

                if (currentUser) {
                    try {
                        await loadProgress(currentUser);
                        await migrateLegacyProgress(currentUser);
                    } catch (error) {
                        console.warn('Khởi tạo tiến trình online thất bại:', error);
                    }
                } else {
                    progressCache = {};
                    progressLoaded = false;
                }

                // Phát sự kiện SAU KHI đã tải xong dữ liệu tiến trình từ Firestore
                window.dispatchEvent(new CustomEvent('gh-auth-ready', { detail: { user: currentUser } }));
                window.dispatchEvent(new CustomEvent('gh-progress-loaded', { detail: { progress: progressCache } }));
                window.ghAuthReadyResolve(currentUser);
            }, (error) => {
                console.error('Firebase auth state error:', error);
                window.ghAuthReadyResolve(null);
            });
        } catch (error) {
            console.error('Firebase khởi tạo thất bại:', error);
            window.ghFirebaseConfigured = false;
            window.ghAuthReadyResolve(null);
        }
    }

    async function sendPasswordReset(email) {
        if (!auth || !isConfigured) throw configError();
        const cleanEmail = String(email || '').trim().toLowerCase();
        if (!cleanEmail || !cleanEmail.includes('@')) {
            throw new Error('Email không hợp lệ.');
        }
        await auth.sendPasswordResetEmail(cleanEmail);
        return true;
    }

    window.ghAuth = {
        isConfigured: () => isConfigured && !!auth,
        getUser: () => currentUser,
        getProgress: () => ({ ...progressCache }),
        loadProgress: () => loadProgress(currentUser),
        saveProgress,
        deleteProgress,
        saveFavorite,
        removeFavorite,
        saveNote,
        migrateLegacyProgress: () => migrateLegacyProgress(currentUser),
        getProfile,
        register,
        login,
        logout,
        sendPasswordReset
    };

    bootstrap();
})();
