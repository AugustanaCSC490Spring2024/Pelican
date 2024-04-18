import './App.css';
import React from 'react';
import ProductView from './component/Products/productView';

function App() {
  return (
    <div className="App">
      <header className='navbar'>
        <h2>Pelican Marketplace</h2>
      </header>
      <ProductView/>
    </div>
  );
}

export default App;
