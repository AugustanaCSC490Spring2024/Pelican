import logo from '../../src/icon.png';
import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = () => {


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
                <ul className='nav-links'>
                    <li className='link-item'><a href='/'>Home</a></li>
                    <li className='link-item'><a href='/Chat'>Chat</a></li>
                    <li className='link-item post-btn'><a href='/Post'>Post</a></li>
                    {/* <li className='link-items'><img className='user' src={logo} /></li> */}
                </ul>
                {/* <img className='user'  src={logo} /> */}
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
                <h5 className='prd-name'>{ prd }</h5>
                <p className='seller'>{ copySeller[i] }</p>
                <p className='price'>{ copyPrice[i] }</p>
              </div>
            </div>
          )
        })
      }

    </div>
    );
}

export default Home;
