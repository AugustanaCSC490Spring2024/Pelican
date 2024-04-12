import firebase from '@react-native-firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCFE3jK_6IA6rr7F9BDSsYtSP0BziYBtDM",
  authDomain: "pelican-marketplace-app.firebaseapp.com",
  projectId: "pelican-marketplace-app",
  storageBucket: "pelican-marketplace-app.appspot.com",
  messagingSenderId: "354512485882",
  appId: "1:354512485882:web:da77226e539ab62a5cf843",
  measurementId: "G-KBY11FZQVF"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
