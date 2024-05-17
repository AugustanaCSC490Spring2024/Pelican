import React, { useState, useEffect } from 'react';
import { auth, db } from '../../data/firebase.js';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';
import './useChat.css'; 

const useChat = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
      });
  
      return () => unsubscribe();
    }, []);
  
    useEffect(() => {
      if (!user) return;
  
      const unsubscribe = onSnapshot(query(collection(db, 'messages'), orderBy('createdAt')), snapshot => { 
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setMessages(data);
      });
  
      return () => unsubscribe();
    }, [user]);
  
    const handleSignIn = async () => {
      try {
        const provider = new db.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
      } catch (error) {
        console.error('Error signing in:', error);
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (text.trim() === '') return;
  
      try {
        await addDoc(collection(db, 'messages'), { 
          text,
          createdAt: new Date(),
          senderId: user.uid,
        });
        setText('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    };
  
    if (!user) {
      return (
        <div>
          <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
      );
    }
  
    return (
      <div className="container">
        <h1>Chatting with receiver</h1>
        <ul className="message-list">
          {messages.map(message => (
            <li key={message.id}>
            </li>
          ))}
        </ul>
        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="message-input"
            placeholder="Type your message..."
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    );
  };
  
  export default useChat;
  
