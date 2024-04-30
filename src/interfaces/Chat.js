import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import useChat from '../component/Chat/useChat.js';

const Chat = () => {
    return (
        <div className="App">
            <Navigation></Navigation>
            <h1>Chatting Page</h1>
            <useChat/>
        </div>
    );
}

export default Chat;
