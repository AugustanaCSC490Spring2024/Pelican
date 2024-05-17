// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "@firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getFirestore, doc, getDoc } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuhorJeBRlYhzJ1YbGytZYayWcy6QSlbk",
  authDomain: "pelican-marketplace-app.firebaseapp.com",
  databaseURL: "https://pelican-marketplace-app-default-rtdb.firebaseio.com",
  projectId: "pelican-marketplace-app",
  storageBucket: "pelican-marketplace-app.appspot.com",
  messagingSenderId: "354512485882",
  appId: "1:354512485882:web:da77226e539ab62a5cf843",
  measurementId: "G-KBY11FZQVF",
}


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
const auth = getAuth(app);
const storage = getStorage(app);

// export { db, app, auth, storage };

export {
  db,
  app,
  auth,
  storage,
  doc,
  getDoc,
};

