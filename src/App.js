import logo from './icon.png';
import './App.css';
import React, {  useState } from 'react';

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

  return (
    <div className="App">
      <div className='navbar'>
        <h2>Pelican Marketplace</h2>
      </div>
      {
        products.map(function(prd,i){
          return (
            <div>
              <div>
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
