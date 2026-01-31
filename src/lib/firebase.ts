import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRN4bttHzn0_-OIiNBJK00GS5jWvGkvFM",
    authDomain: "studio-5036609725-a508c.firebaseapp.com",
    projectId: "studio-5036609725-a508c",
    storageBucket: "studio-5036609725-a508c.firebasestorage.app",
    messagingSenderId: "229587001144",
    appId: "1:229587001144:web:c31793809a8bc7a5d2abcd"
};

// Initialize Firebase (Server-Side Rendering safe)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
