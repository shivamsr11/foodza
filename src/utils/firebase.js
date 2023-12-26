import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0SZYZYmnJ1UE7fNaZDe38QPONNSKuKlw",
  authDomain: "food-delivery-app-20d42.firebaseapp.com",
  projectId: "food-delivery-app-20d42",
  storageBucket: "food-delivery-app-20d42.appspot.com",
  messagingSenderId: "73461047205",
  appId: "1:73461047205:web:a94b5853234275264ed24c",
  measurementId: "G-KT42VE08BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();