import '../App.css';
import React, { useEffect, useState } from 'react';
import ProductView from '../component/Products/productView';
import logoTrans from '../assets/logo-trans.png';
import AddProductForm from '../component/Products/addProductForm';
import { db, auth } from '../data/firebase.js'
import SearchComponent from '../component/SearchComponents/SearchBar.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Navigation = () => {
  // const [results, setResults] = useState([]);
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
        <div style={{display: 'flex'}}>
          <img src={logoTrans} alt='logo' style={{width: '70px', height: '70px'}}></img>
          <h2>Pelican Marketplace</h2>
        </div>
        <div className = "search-bar-container">
          <SearchComponent db={ db } />
        </div>
        <ul className='nav-links'>
          <li className='link-item'><a href='/home'>Home</a></li>
          <li className='link-item'><a href='/chat'>Chat</a></li>
          <li className='link-item post-btn'><a href='/post'>Post</a></li>
        </ul>
      </div>
  );
}

{/* <ProductView/> */}
{/* <AddProductForm /> */}
{/* Put here temporarily - will modify where to put later */}
{/* {showForm ? <AddProductForm /> : <ProductView />} */}

export default Navigation;