import logo from '../../src/icon.png';
import '../App.css';
import React, { useState } from "react";

const Post = () => {


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
  let copyProducts = [...products]

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
            <div>
                <input type="file" />
            </div>
        </div>
    );
}

export default Post;