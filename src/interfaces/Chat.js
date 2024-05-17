import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import 'firebase/firestore';
import 'firebase/auth';

const Chat = () => {
    return (
        <div className="App">
            <Navigation />
            <h1>Chatting Page</h1>
            
        </div>
    );
}

export default Chat;
