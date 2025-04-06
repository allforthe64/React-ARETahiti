// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfYt8glG7XIKbkh0F7mQjiEPWfrhdAWCU",
  authDomain: "kenpaddleshop.firebaseapp.com",
  projectId: "kenpaddleshop",
  storageBucket: "kenpaddleshop.firebasestorage.app",
  messagingSenderId: "1034154626864",
  appId: "1:1034154626864:web:876e18228da50cfbdd02f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)