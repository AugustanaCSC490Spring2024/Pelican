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
