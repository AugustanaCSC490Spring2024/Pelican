import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom'; // For navigation
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from './firebase'; // Ensure firebase.js has been created and initialized

function SignIn() {
  const navigate = useNavigate(); // Navigation hook

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const idToken = credentialResponse.credential;
      const credential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, credential); // Sign in with Firebase
      navigate('/app'); // Navigate to App.js upon successful sign-in
    } catch (error) {
      console.error('Firebase sign-in error:', error);
    }
  };

  return (
    <div>
      <h1>Sign in with Google</h1>
      <GoogleLogin
        onSuccess={handleGoogleLogin}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
}

export default SignIn;
