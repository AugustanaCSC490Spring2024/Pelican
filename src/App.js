import logo from './logo.svg';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;

      const credential = GoogleAuthProvider.credential(idToken);

      const userCredential = await signInWithCredential(auth, credential);

      setUser(userCredential.user);
      console.log('User signed in:', userCredential.user);
    } catch (error) {
      console.error('Firebase sign-in error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        {user ? (
          <p>Welcome, {user.displayName}!</p>
        ) : (
          <>
            <p>Google Authentication.</p>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => console.log('Login Failed')}
            />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
