import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import { render } from '@testing-library/react';
import SearchProducts from '../component/Products/SearchProducts.js';
import ShowProducts from '../component/Products/showProducts.js';

const Home = () => {
    return (
        <div className="App">
            <Navigation /> 
            
            <ShowProducts />
    </div>
    ); 
 }

export default Home;
