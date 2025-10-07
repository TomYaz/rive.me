// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { firebaseConfig } from "./Firebase_data"; // dangerous file, keep away from github
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signIn(email, password) {
    try {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        console.log("Signed in:", cred);
        return cred;
    } catch (err) {
        console.error("Sign-in error:", err);
        throw err;
    }
}

export async function createUser(email, password, name) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // Set the user's display name right after account creation
            updateProfile(user, { displayName: name })
                .then(() => {
                    console.log("User profile updated with name:", name); // verification of user name added - TO BE COMMENTED OUT
                })
                .catch((error) => {
                    console.error("Error updating profile:", error); // verification of user name added - TO BE COMMENTED OUT
                });

            console.log("User created:", user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}


export function getUserDisplayName() {
    return new Promise((resolve, reject) => {
        try {
            const unsubscribe = onAuthStateChanged(
                auth,
                (user) => {
                    unsubscribe();
                    const name = user?.displayName?.trim();
                    resolve(name && name.length > 0 ? name : "Guest");
                },
                (err) => {
                    unsubscribe();
                    reject(err);
                }
            );
        } catch (e) {
            reject(e);
        }
    });
}