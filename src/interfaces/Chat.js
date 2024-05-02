import '../App.css';
import React from 'react';
import Navigation from './Navigation';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Chat = () => {
    return (
        <div className="App">
            <Navigation />
            <h1>Chatting Page</h1>
            
        </div>
    );
}

export default Chat;
