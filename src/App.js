import logo from './icon.png';
import './App.css';
import React, { useState } from 'react';
import { SearchBar } from "./component/SearchComponents/SearchBar.js";
import { SearchResultsList } from "./component/SearchComponents/SearchResultsList";

function App() {

  let [products, setName] = React.useState(
    ['POLO Sweater', 'iPhone X', 'Galaxy S9', 'Used Textbook', 'Coffee Machine', 'Easter Egg', 'Nuke']
  );

  let [price, setPrice] = React.useState(
    ['$15', '$200', '$220', '$20', '$22', 'Free', '$1,000,000']
  )

  let [sellers, setSeller] = React.useState(
    ['jslee402', 'XanderBender', 'SobanTuban', 'StephanieCurry', 'Stonedahl101', 'Rockdahl102', 'NorthKorea']
  )

  let copyPrice = [...price]
  let copySeller = [...sellers]

  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className='navbar'>
        <h2>Pelican Marketplace</h2>
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

      {/* <button onClick={ ()=> {
        let copy = [...price];
        copy.sort();
        setPrice(copy);
      } }>Sort by Price</button> */}

      {
        products.map(function(prd,i){
          return (
            <div className='post'> 
              <img src={logo} className='prd-img'/>
              <div className='prd-info'>
                <h5>{ prd }</h5>
                <p>{ copySeller[i] }</p>
                <p>{ copyPrice[i] }</p>
              </div>
            </div>
          )
        })
      }

    </div>
  );
}

export default App;
