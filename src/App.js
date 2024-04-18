import './App.css';
import React from 'react';
import ProductView from './component/Products/productView';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <h2>Pelican Marketplace</h2>
        <ul className='nav-links'>
          <li className='link-item'><a href=''>Home</a></li>
          <li className='link-item'><a href=''>Chat</a></li>
          <li className='link-item post-btn'><a href=''>Post</a></li>
        </ul>
      </div>
      <ProductView/>
    </div>
  );
}

export default App;
