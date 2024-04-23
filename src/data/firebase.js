// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFE3jK_6IA6rr7F9BDSsYtSP0BziYBtDM",
  authDomain: "pelican-marketplace-app.firebaseapp.com",
  databaseURL: "https://pelican-marketplace-app-default-rtdb.firebaseio.com",
  projectId: "pelican-marketplace-app",
  storageBucket: "pelican-marketplace-app.appspot.com",
  messagingSenderId: "354512485882",
  appId: "1:354512485882:web:da77226e539ab62a5cf843",
  measurementId: "G-KBY11FZQVF"
};


// Help debug missing credentials (later)
if (!firebaseConfig.apiKey) throw new Error("Missing Firebase credentials: apiKey");
if (!firebaseConfig.authDomain) throw new Error("Missing Firebase credentials: authDomain");
if (!firebaseConfig.projectId) throw new Error("Missing Firebase credentials: projectId");
if (!firebaseConfig.databaseURL) throw new Error("Missing Firebase credentials: databaseURL");
if (!firebaseConfig.storageBucket) throw new Error("Missing Firebase credentials: storageBucket");
if (!firebaseConfig.messagingSenderId) throw new Error("Missing Firebase credentials: messagingSenderId");
if (!firebaseConfig.appId) throw new Error("Missing Firebase credentials: appId");
if (!firebaseConfig.measurementId) throw new Error("Missing Firebase credentials: measurementId");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };

