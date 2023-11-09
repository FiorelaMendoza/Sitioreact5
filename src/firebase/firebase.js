
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, getDocs, query, where, setDoc, deleteDoc, updateDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVwC2B_ruSBuKrQocMMSf2HIrVyy1aksw",
  authDomain: "fio1520.firebaseapp.com",
  projectId: "fio1520",
  storageBucket: "fio1520.appspot.com",
  messagingSenderId: "823294772224",
  appId: "1:823294772224:web:d19e71698d474f033184e5",
  measurementId: "G-GK6CVJ7YK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
const storage = getStorage(app);

