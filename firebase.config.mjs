import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "./src/env/server.mjs";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: env.FIREBASE_APIKEY,
    authDomain: env.FIREBASE_AUTHDOMAIN,
    projectId: env.FIREBASE_PROJECTID,
    storageBucket: env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: env.FIREBASE_MESSAGINGSENDERID,
    appId: env.FIREBASE_APPID,
    measurementId: env.FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
auth.useDeviceLanguage();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential);
        });
}