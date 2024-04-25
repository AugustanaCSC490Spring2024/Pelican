import logo from '../assets/icon.png'
import '../App.css';
import React, { useState } from "react";
import Navigation from '../interfaces/Navigation'
import AddProductForm from '../component/Products/addProductForm';

const Post = () => {

    return (
        <div className='App'>
            <Navigation />
            <AddProductForm />
        </div>

    );
}

export default Post;