// Navigation.js
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../data/firebase';
import logoTrans from '../assets/logo-trans.png';

const Navigation = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                navigate('/');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    if (!user) {
        return null;
    }

    return (
        <div className='navbar'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={logoTrans} alt='logo' style={{ width: '70px', height: '70px' }} />
                <h2 style={{ fontWeight: 'bold' }}>Pelican Marketplace</h2>
            </div>
            <ul className='nav-links'>
                <li className='link-item'><a href='/home'>Home</a></li>
                <li className='link-item'><a href='/chat'>Chat</a></li>
                <li className='link-item post-btn btn-space'><a href='/post'>Post</a></li>
                <li className='link-item post-btn'><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </div>
    );
};

export default Navigation;
