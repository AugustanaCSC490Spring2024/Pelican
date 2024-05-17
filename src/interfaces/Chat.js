// Chat.js
import React from 'react';
import Navigation from './Navigation';
import '../styles/chat.css';
import Chatting from '../component/Chat/useChat.js';

const Chat = () => {

    return (
        <div className="App">
            <Navigation />
            <Chatting />
        </div>
    );
};

export default Chat;
