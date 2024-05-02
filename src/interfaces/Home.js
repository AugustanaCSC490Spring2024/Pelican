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

export default Home;
