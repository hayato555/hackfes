'use strict';

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getDatabase, ref, push, set, onChildAdded, remove, onChildRemoved } 
from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0bXyQdC7i7JStwyb06xrHfoQYZ47Wqx4",
  authDomain: "g-s-demo-90796.firebaseapp.com",
  databaseURL: "https://g-s-demo-90796-default-rtdb.firebaseio.com",
  projectId: "g-s-demo-90796",
  storageBucket: "g-s-demo-90796.appspot.com",
  messagingSenderId: "657032216373",
  appId: "1:657032216373:web:a66e01fa93c2dbf2ced67c",
  measurementId: "G-S0VB82VGVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getDatabase(app); 
const Ref_1stPlayer = ref(db,"1stPlayer"); 
const Ref_2ndPlayer = ref(db,"2ndPlayer"); 
const Ref_3rdPlayer = ref(db,"3rdPlayer"); 
const Ref_4thPlayer = ref(db,"4thPlayer"); 

