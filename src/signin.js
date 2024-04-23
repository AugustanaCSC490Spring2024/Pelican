import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../src/data/firebase';

function SignIn() {
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;
            const credential = GoogleAuthProvider.credential(idToken);
            await signInWithCredential(auth, credential);
            navigate('/app');
        } catch (error) {
            console.error('Firebase sign-in error:', error);
        }
    };

    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div>
                <h1>Sign in with Google</h1>
                <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </main>
    );
}

export default SignIn;
