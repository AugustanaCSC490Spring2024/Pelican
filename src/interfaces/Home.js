import logo from '../assets/icon.png'
import '../App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import ProductView from '../component/Products/allProductView';

const Home = () => {

    return (
        <div className="App">
            <Navigation></Navigation>
            <ProductView></ProductView>

    </div>
    );
}

// {
//   products.map(function(prd,i){
//     return (
//       <div className='post'> 
//         <img src={logo} className='prd-img'/>
//         <div className='prd-info'>
//           <h5 className='prd-name'>{ prd }</h5>
//           <p className='seller'>{ copySeller[i] }</p>
//           <p className='price'>{ copyPrice[i] }</p>
//         </div>
//       </div>
//     )
//   })
// }

export default Home;
