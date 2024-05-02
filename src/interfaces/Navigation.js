import '../App.css';
import React, { useEffect, useState } from 'react';
import logoTrans from '../assets/logo-trans.png';
import { auth } from '../data/firebase.js'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { db } from "../data/firebase";
import SearchComponent from '../component/Search/SearchBar';

const Navigation = () => {
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

  return (
    <div className='navbar'>
      <div style={styles.logoCont}>
        <img src={logoTrans} alt='logo' style={{ width: '70px', height: '70px' }}></img>
        <h2 style={{ fontWeight: 'bold' }}>Pelican Marketplace</h2>
      </div>
      <div style={styles.menuCont}>
        <ul className='nav-links'>
          <li className='link-item'><SearchComponent db={db} /></li>
          <li className='link-item'><a href='/home'>Home</a></li>
          <li className='link-item'><a href='/chat'>Chat</a></li>
          <li className='link-item post-btn'><a href='/post'>Post</a></li>
          <li className='link-item post-btn'><button onClick={handleLogout}>Logout</button></li>
        </ul>
      </div>
      {/* <div style={styles.userCont}>
        <h3>Welcome, {user.displayName}!</h3>
      </div> */}
    </div>
  );
}

const styles = {
  logoCont: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default Navigation;
