import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore/lite";
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmP4pciCMXpU_6vMg89nQw9F6vV08kyZ8",
  authDomain: "belajar-firebase-511aa.firebaseapp.com",
  projectId: "belajar-firebase-511aa",
  storageBucket: "belajar-firebase-511aa.appspot.com",
  messagingSenderId: "356276762275",
  appId: "1:356276762275:web:ebd4d6bcc7164ba1dab116",
  measurementId: "G-RDXBV9T46T",
};

// Initialize Firebase
const fireConfig = initializeApp(firebaseConfig);
const db = getFirestore(fireConfig);
export default db;
