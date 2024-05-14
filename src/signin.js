import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from '../src/data/firebase';
import './styles/tailwind.css'

function SignIn() {
    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse) => {
        try {
            const idToken = credentialResponse.credential;
            const credential = GoogleAuthProvider.credential(idToken);
            await signInWithCredential(auth, credential);
            navigate('/home');
        } catch (error) {
            console.error('Firebase sign-in error:', error);
        }
    };


    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600 space-y-5">
                <div className="text-center pb-8">
                    <img src="icon.png" width={250} className="mx-auto" />
                    <div className="mt-5">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Log in with your Google account</h3>
                    </div>
                </div>
                <div className="w-full flex flex-col items-center justify-center px-4">
                    <GoogleLogin
                        onSuccess={handleGoogleLogin}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                    />
                </div>
                <p className="text-center">Don't have an account? 
                    <a
                        href="https://accounts.google.com/lifecycle/steps/signup/name?ddm=0&dsh=S-116527255:1714006121860844&flowEntry=SignUp&flowName=GlifWebSignIn&theme=mn&TL=ALv_Gf9iuc5Nthx2iJtuja1YxogZc3EgQchE7yC1xhaiEaV78I-FJ2Gs1BY1rMTc"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                        Sign up with Google
                    </a>
                </p>
            </div>
        </main>
    );
};

export default SignIn;
