// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration (obtain this from the Firebase Console)
const firebaseConfig = {
  apiKey: 'AIzaSyAuhorJeBRlYhzJ1YbGytZYayWcy6QSlbk',
  authDomain: 'pelican-marketplace-app.firebaseapp.com',
  projectId: 'pelican-marketplace-app',
  storageBucket: 'pelican-marketplace-app.appspot.com',
  messagingSenderId: '354512485882',
  appId: '1:354512485882:web:da77226e539ab62a5cf843',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
