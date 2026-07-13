// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {

  apiKey: "AIzaSyCwLJes8Wi47sbYFdx-M-wieVfrJtNwQrU",

  authDomain: "smartx-5cfb1.firebaseapp.com",

  projectId: "smartx-5cfb1",

  storageBucket: "smartx-5cfb1.firebasestorage.app",

  messagingSenderId: "429730063200",

  appId: "1:429730063200:web:03524aef653c3ed6f97405",

  measurementId: "G-S4V29MRQJM"

};



const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);


export const db = getFirestore(app);initializeApp(firebaseConfig);
const analytics = getAnalytics(app);