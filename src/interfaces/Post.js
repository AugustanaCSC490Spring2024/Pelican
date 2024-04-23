import logo from '../assets/icon.png'
import '../App.css';
import React, { useState } from "react";
import Navigation from '../interfaces/Navigation'

const Post = () => {

    return (
        // <div className="App">
        //     <div className='navbar'>
        //         <h2>Pelican Marketplace</h2>
        //         <ul className='nav-links'>
        //             <li className='link-item'><a href='/'>Home</a></li>
        //             <li className='link-item'><a href='/Chat'>Chat</a></li>
        //             <li className='link-item post-btn'><a href='/Post'>Post</a></li>
        //             {/* <li className='link-items'><img className='user' src={logo} /></li> */}
        //         </ul>
        //         {/* <img className='user'  src={logo} /> */}
        //     </div>
        //     <div>
        //         <input type="file" />
        //     </div>
        // </div>
        <Navigation></Navigation>
    );
}

export default Post;