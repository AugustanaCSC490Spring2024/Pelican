import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from '../src/interfaces/Home';
import Post from '../src/interfaces/Post';
import Chat from '../src/interfaces/Chat';
import SignIn from './signin';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EachProductView from './component/Products/eachProductView';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="354512485882-ea968m8en83dr08svv1gkin8ns9etofu.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} /> 
          <Route exact path="/app/*" element={<App />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/post" element={<Post />} />
          <Route path="/product/:productId" component={EachProductView} />
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
