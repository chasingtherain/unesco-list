// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQdfAxnUHOzQ11jOpZHZo0Tg5iVTGmyoE",
  authDomain: "auth-dev-for-unesco.firebaseapp.com",
  projectId: "auth-dev-for-unesco",
  storageBucket: "auth-dev-for-unesco.appspot.com",
  messagingSenderId: "676430905353",
  appId: "1:676430905353:web:2377f34a5f357645d6b8d8"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth

