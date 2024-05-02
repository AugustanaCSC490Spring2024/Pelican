import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import SearchProducts from '../component/Products/SearchProducts.js';

const Home = () => {
    return (
        <div className="App">
            <Navigation /> 
            <SearchProducts />
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
