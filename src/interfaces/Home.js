import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import { render } from '@testing-library/react';
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
