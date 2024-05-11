// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu4xb3btDGvltU6XMYtri93oaksVR64_U",
  authDomain: "enigmaheights-3c384.firebaseapp.com",
  projectId: "enigmaheights-3c384",
  storageBucket: "enigmaheights-3c384.appspot.com",
  messagingSenderId: "825371468811",
  appId: "1:825371468811:web:94313d77f497cb85e1530e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db= getFirestore(app);

export default app; 