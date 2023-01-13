import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { env } from "./src/env/server.mjs";

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