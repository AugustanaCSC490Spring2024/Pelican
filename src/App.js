// import logo from '';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { BrowserRouter as Switch, Router, Route, Routes } from 'react-router-dom';
import Home from './interfaces/Home';
import Post from './interfaces/Post';
import Chat from './interfaces/Chat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/post" component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
