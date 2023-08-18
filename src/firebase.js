import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAitC-c5vmQZ3Pu_8Cx_yNqd52YmCBUNM",
  authDomain: "clone-846c4.firebaseapp.com",
  projectId: "clone-846c4",
  storageBucket: "clone-846c4.appspot.com",
  messagingSenderId: "982288406875",
  appId: "1:982288406875:web:3fee01021bc62a0292e27e",
  measurementId: "G-CN7BKLX5JY",
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);

export const provider = new GoogleAuthProvider();
