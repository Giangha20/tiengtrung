/* ============================================================
   FIREBASE AUTH + CLOUD PROGRESS
   Dùng cho GitHub Pages / static hosting.
   ============================================================ */
(function () {
    const config = window.FIREBASE_CONFIG || {};
    const isConfigured = config.projectId && !String(config.projectId).startsWith('YOUR_');

    let auth = null;
    let db = null;
    let currentUser = null;
    let progressCache = {};
    let progressLoaded = false;

    function configError() {
        return new Error('Chưa cấu hình Firebase. Hãy điền firebase-config.js trước khi đăng nhập.');
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

            // Trường hợp bản cũ lưu theo email nhưng email khác chữ hoa/thường.
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
            return true;
        } catch (error) {
            console.warn('Không thể chuyển tiến trình cũ lên Firebase:', error);
            return false;
        }
    }

    async function saveProgress(patch) {
        if (!currentUser || !db || !patch || typeof patch !== 'object') return false;

        const next = {
            ...progressCache,
            ...patch,
            updatedAt: new Date().toISOString()
        };
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
            try {
                await credential.user.updateProfile({ displayName: username.trim() });
            } catch (e) {
                console.warn('Không cập nhật được displayName:', e);
            }
        }
        await createProfile(credential.user, username);
        // Không tự coi đăng ký là đã hoàn tất luồng học; trang đăng ký sẽ đưa về login.
        await auth.signOut();
        return credential.user;
    }

    async function login(email, password) {
        if (!auth || !isConfigured) throw configError();
        const credential = await auth.signInWithEmailAndPassword(email.trim().toLowerCase(), password);
        return credential.user;
    }

    async function logout() {
        if (!auth) return;
        await auth.signOut();
    }

    async function bootstrap() {
        if (!isConfigured) {
            window.ghFirebaseConfigured = false;
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

                window.ghAuthReadyResolve(currentUser);
            });
        } catch (error) {
            console.error('Firebase khởi tạo thất bại:', error);
            window.ghFirebaseConfigured = false;
            window.ghAuthReadyResolve(null);
        }
    }

    let resolveReady;
    window.ghAuthReady = new Promise(resolve => { resolveReady = resolve; });
    window.ghAuthReadyResolve = resolveReady;

    window.ghAuth = {
        isConfigured: () => isConfigured && !!auth,
        getUser: () => currentUser,
        getProgress: () => ({ ...progressCache }),
        loadProgress: () => loadProgress(currentUser),
        saveProgress,
        deleteProgress,
        migrateLegacyProgress: () => migrateLegacyProgress(currentUser),
        getProfile,
        register,
        login,
        logout
    };

    bootstrap();
})();
