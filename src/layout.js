import React from 'react';
import Navigation from './interfaces/Navigation'; 

const Layout = ({ children }) => (
  <div>
    <Navigation /> 
    {children} 
  </div>
);

export default Layout;