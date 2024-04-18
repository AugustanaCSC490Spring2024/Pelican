import './App.css';
import React, { useState } from 'react';
import { SearchBar } from "./component/SearchComponents/SearchBar.js";
import { SearchResultsList } from "./component/SearchComponents/SearchResultsList";
import ProductView from './component/Products/productView';
import logoTrans from './assets/logo-trans.png';


function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <div className='navbar'>
        <div style={{display: 'flex'}}>
          <img src={logoTrans} alt='logo' style={{width: '70px', height: '70px'}}></img>
          <h2>Pelican Marketplace</h2>
        </div>
        <div className = "search-bar-container">
          <SearchBar setResults={setResults}/>
          {results && results.length > 0 && <SearchResultsList results={results}/>}
        </div>
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
