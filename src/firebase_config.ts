import { version } from "react";

export const firebaseConfig = {
    "projectId": import.meta.env.VITE_FIREBASE_PROJECTID,
    "appId": import.meta.env.VITE_FIREBASE_APPID,
    "storageBucket": import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    "apiKey": import.meta.env.VITE_FIREBASE_APIKEY,
    "authDomain": import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    "messagingSenderId": import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    "projectNumber": import.meta.env.VITE_FIREBASE_PROJECTNUMBER,
    "version": import.meta.env.VITE_FIREBASE_VERSION
}