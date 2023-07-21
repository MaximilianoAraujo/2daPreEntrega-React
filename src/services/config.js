// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "max-gaming-1c66b.firebaseapp.com",
    projectId: "max-gaming-1c66b",
    storageBucket: "max-gaming-1c66b.appspot.com",
    messagingSenderId: "772554626818",
    appId: "1:772554626818:web:203dfe3e23b3b568a8141b"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);