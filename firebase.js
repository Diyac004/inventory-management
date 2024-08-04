// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc-R2qUPDAFapyvFEx5j7itB7RU1h6gV4",
  authDomain: "pantry-tracker-b57cd.firebaseapp.com",
  projectId: "pantry-tracker-b57cd",
  storageBucket: "pantry-tracker-b57cd.appspot.com",
  messagingSenderId: "439047018106",
  appId: "1:439047018106:web:6677b9deef9ed260ea8dc3",
  measurementId: "G-0Z12XG0VHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export {firestore,analytics}