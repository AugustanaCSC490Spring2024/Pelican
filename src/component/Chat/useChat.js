import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db, auth } from '../../data/firebase';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import '../../styles/chat.css';

const Chatting = () => {
    const { productId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const q = query(collection(db, "messages"), where("productId", "==", productId), orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push(doc.data());
            });
            setMessages(msgs);
        });
        return () => unsubscribe();
    }, [productId]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (newMessage.trim() !== "") {
            await addDoc(collection(db, "messages"), {
                text: newMessage,
                timestamp: new Date(),
                productId: productId,
                userId: user.uid,
                username: user.displayName
            });
            setNewMessage("");
        }
    };

    return (
        <div className="App">
            <div className="chat-container">
                <div className="messages"> 
                    {messages.map((msg, index) => (
                        <div key={index} className={`message ${msg.userId === user.uid ? 'sent' : 'received'}`}>
                            <div className="message-info">
                                <span className="username">{msg.username}</span>
                                <span className="timestamp">{new Date(msg.timestamp.toDate()).toLocaleTimeString()}</span>
                            </div>
                            <div className="message-text">{msg.text}</div>
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSend} className="message-form">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chatting;