// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqOjb7lWwPpF4FsfOxO1fPXkB41NJe3w",
  authDomain: "symptom-checker-3d2c2.firebaseapp.com",
  projectId: "symptom-checker-3d2c2",
  storageBucket: "symptom-checker-3d2c2.firebasestorage.app",
  messagingSenderId: "653206318294",
  appId: "1:653206318294:web:0d3b254f7863f148116d77",
  measurementId: "G-YFFDPBVEYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail };