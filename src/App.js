import './App.css';
import React, { useState } from 'react';
import ProductView from './component/Products/productView';
import logoTrans from './assets/logo-trans.png';
import AddProductForm from './component/Products/addProductForm.js';
import { db } from './data/firebase.js';
import SearchComponent from './component/SearchComponents/SearchBar.js';


function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="App">
      <div className='navbar'>
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
