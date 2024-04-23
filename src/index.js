import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './signin'; // Import the new SignIn component
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="354512485882-ea968m8en83dr08svv1gkin8ns9etofu.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} /> {/* Default route is SignIn */}
          <Route path="/app" element={<App />} /> {/* App route */}
        </Routes>
      </Router>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
