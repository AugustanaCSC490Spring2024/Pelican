import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import AllProductView from '../component/Products/allProductView.js';
import { render } from '@testing-library/react';
import SearchProducts from '../component/Products/SearchProducts.js';

const Home = () => {
    return (
        <div className="App">
            <Navigation /> 
            {/* <AllProductView />  */}
            <SearchProducts />
            <AllProductView />
    </div>
    ); 
 }

export default Home;
