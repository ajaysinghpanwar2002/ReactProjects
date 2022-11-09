// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBi1gV3EKphZBuTm1pxn2cd0_V047ijNg0",
    authDomain: "react-firebase-5b28b.firebaseapp.com",
    projectId: "react-firebase-5b28b",
    storageBucket: "react-firebase-5b28b.appspot.com",
    messagingSenderId: "565248328697",
    appId: "1:565248328697:web:b9196d362328b042363328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const provider = new GoogleAuthProvider();