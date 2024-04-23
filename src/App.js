import './App.css';
import React, { useState, useEffect } from 'react';
import ProductView from './component/Products/productView';
import logoTrans from './assets/logo-trans.png';
import AddProductForm from './component/Products/addProductForm.js';
import { db, auth } from './data/firebase.js';
import SearchComponent from './component/SearchComponents/SearchBar.js';
import { onAuthStateChanged } from 'firebase/auth'; // Track authentication state
import { useNavigate } from 'react-router-dom';


function App() {
  const [showForm, setShowForm] = useState(false);
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

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="App">
      <div className='navbar'>
        <div>
          <h1>Welcome, {user.displayName}!</h1>
        </div>
        <div style={{display: 'flex'}}>
          <img src={logoTrans} alt='logo' style={{width: '70px', height: '70px'}}></img>
          <h2>Pelican Marketplace</h2>
        </div>
        <div>
          <SearchComponent db={db} />
        </div>
        <ul className='nav-links'>
          <li className='link-item'><a href=''>Home</a></li>
          <li className='link-item'><a href=''>Chat</a></li>
          <li className='link-item post-btn'><a href='' onClick={handleShowForm}>Post</a></li>
        </ul>
      </div>
      {/* <ProductView/> */}
      {/* <AddProductForm /> */}
      {/* Put here temporarily - will modify where to put later */}
      {showForm ? <AddProductForm /> : <ProductView />}
    </div>
  );
}

export default App;
