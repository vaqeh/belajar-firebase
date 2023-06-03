import firebase from "firebase/app";
import { initializeApp, applicationDefault, cert } from "firebase/app";
import { getFirestore, Timestamp, FieldValue } from "firebase/firestore/lite";
import "firebase/firestore";
// import "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
// const { getFirestore, } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAmSsNrlaHQEmiMXd3ea5dC8rD0b2cjhVc",
  authDomain: "sinau-819a2.firebaseapp.com",
  projectId: "sinau-819a2",
  storageBucket: "sinau-819a2.appspot.com",
  messagingSenderId: "747049055322",
  appId: "1:747049055322:web:eef6f6589522c61ae8d463",
  measurementId: "G-05CNLJERLJ",
};
// Initialize Firebase
const fireConfig = initializeApp(firebaseConfig);
const db = getFirestore(fireConfig);
export default db;
