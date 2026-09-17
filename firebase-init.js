// firebase-init.js
firebase.initializeApp(firebaseConfig);

const firebaseAuth = firebase.auth();
const firebaseDb = firebase.firestore();

window.firebaseAuth = firebaseAuth;
window.firebaseDb = firebaseDb;
window.currentFirebaseUser = null;

window.firebaseReady = new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
        window.currentFirebaseUser = user || null;
        resolve(user || null);
    });
});
