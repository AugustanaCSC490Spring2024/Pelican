import '../App.css';
import React, { useEffect, useState } from 'react';
import logoTrans from '../assets/logo-trans.png';
import { db, auth } from '../data/firebase.js'
import SearchComponent from '../component/Search/SearchBar.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  const [showForm, setShowForm] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log('User object:', user);
      } else {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  if (!user) {
    return null;
  }

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className='navbar'>
      <h3>Welcome, {user.displayName}!</h3>
      <button className='link-item post-btn' onClick={handleLogout}>Logout</button>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={logoTrans} alt='logo' style={{ width: '70px', height: '70px' }}></img>
        <h2 style={{ fontWeight: 'bold' }}>Pelican Marketplace</h2>
      </div>
      <div style={styles.box}>
        <ul className='nav-links'>
          <li className='link-item'><SearchComponent db={db} /></li>
          <li className='link-item'><a href='/home'>Home</a></li>
          <li className='link-item'><a href='/chat'>Chat</a></li>
          <li className='link-item post-btn'><a href='/post'>Post</a></li>
        </ul>
      </div>
      {/* <div className = "search-bar-container">
          <SearchComponent db={ db } />
        </div>
        <ul className='nav-links'>
          <li className='link-item'><a href='/home'>Home</a></li>
          <li className='link-item'><a href='/chat'>Chat</a></li>
          <li className='link-item post-btn'><a href='/post'>Post</a></li>
        </ul> */}

    </div>
  );
}

const styles = {
  box: {
    display: 'flex',
    alignItems: 'center'
  }
}

{/* <ProductView/> */ }
{/* <AddProductForm /> */ }
{/* Put here temporarily - will modify where to put later */ }
{/* {showForm ? <AddProductForm /> : <ProductView />} */ }

export default Navigation;
