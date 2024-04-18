import './App.css';
import React from 'react';
import ProductView from './component/Products/productView';

function App() {
  return (
    <div className="App">
      <header className='navbar'>
        <h1>Pelican Marketplace</h1>
      </header>
      <ProductView/>
    </div>
  );
}

export default App;
