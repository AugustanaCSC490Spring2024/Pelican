// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from '@react-native-firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFE3jK_6IA6rr7F9BDSsYtSP0BziYBtDM",
  authDomain: "pelican-marketplace-app.firebaseapp.com",
  projectId: "pelican-marketplace-app",
  storageBucket: "pelican-marketplace-app.appspot.com",
  messagingSenderId: "354512485882",
  appId: "1:354512485882:web:da77226e539ab62a5cf843",
  measurementId: "G-KBY11FZQVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// let app;

// if (firebase.apps.length === 0) {
//   app = initializeApp(firebaseConfig)
// } else {
//   app = firebase.app();
// }