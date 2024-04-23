import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth'; // Track authentication state
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    // Track authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set the authenticated user
      } else {
        navigate('/'); // Redirect to sign-in if no user is authenticated
      }
    });

    return () => unsubscribe(); // Clean up the subscription on component unmount
  }, [navigate]); // Dependency array includes navigate

  if (!user) {
    return null; // Return null while checking authentication state
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      {/* Additional content for authenticated users */}
    </div>
  );
}

export default App;
