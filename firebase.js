// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwLJes8Wi47sbYFdx-M-wieVfrJtNwQrU",
  authDomain: "smartx-5cfb1.firebaseapp.com",
  projectId: "smartx-5cfb1",
  storageBucket: "smartx-5cfb1.firebasestorage.app",
  messagingSenderId: "429730063200",
  appId: "1:429730063200:web:03524aef653c3ed6f97405",
  measurementId: "G-S4V29MRQJM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);