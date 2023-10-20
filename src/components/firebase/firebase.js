// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth } from "firibase/auth";
import {getStorage, ref, uploadByes } from "firebase/storage";
import { getFirestore,addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHLK2wKnOESYexlcyvDAdOFlSxtiS22Mo",
  authDomain: "reactapp03.firebaseapp.com",
  projectId: "reactapp03",
  storageBucket: "reactapp03.appspot.com",
  messagingSenderId: "342043205667",
  appId: "1:342043205667:web:0c327a3b226e8474009196",
  measurementId: "G-M5M1JT89CE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const auth    =  getAuth(app);
export const db      = getFirestore(App);
const storage = getStorage(App);