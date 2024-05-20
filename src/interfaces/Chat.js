import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import 'firebase/firestore';
import 'firebase/auth';
import ManageChat from '../component/ChatSystem/ManageChat';

const Chat = () => {
    return (
        <div className="App">
            <Navigation />
            <ManageChat />            
        </div>
    );
}

export default Chat;
