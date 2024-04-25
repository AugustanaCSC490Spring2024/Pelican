import logo from '../assets/icon.png'
import '../App.css';
import React, { useState } from "react";
import Navigation from './Navigation';

const Chat = () => {

    return (
        <div className="App">
            <Navigation />
            <h1>Chatting Page</h1>
        </div>
    );
}

export default Chat;
