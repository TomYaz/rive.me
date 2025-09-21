// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase_data"; // dangerous file, keep away from github
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, } from "firebase/auth";

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export async function signIn(email, password) {
    //await setPersistence(auth, browserLocalPersistence); // optional, keeps session after refresh
    signInWithEmailAndPassword(getAuth(app), email, password)
}
