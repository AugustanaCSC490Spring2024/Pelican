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

// import './App.css';
// import React, { useState } from 'react';
// import { SearchBar } from "./component/SearchComponents/SearchBar.js";
// import { SearchResultsList } from "./component/SearchComponents/SearchResultsList";
// import ProductView from './component/Products/productView';
// import logoTrans from './assets/logo-trans.png';
// import AddProductForm from './component/Products/addProductForm.js'

// function App() {
//   const [results, setResults] = useState([]);
//   const [showForm, setShowForm] = useState(false);

//   const handleShowForm = (e) => {
//     e.preventDefault();
//     setShowForm(true);
//   };

//   return (
//     <div className="App">
//       <div className='navbar'>
//         <div style={{display: 'flex'}}>
//           <img src={logoTrans} alt='logo' style={{width: '70px', height: '70px'}}></img>
//           <h2>Pelican Marketplace</h2>
//         </div>
//         <div className = "search-bar-container">
//           <SearchBar setResults={setResults}/>
//           {results && results.length > 0 && <SearchResultsList results={results}/>}
//         </div>
//         <ul className='nav-links'>
//           <li className='link-item'><a href=''>Home</a></li>
//           <li className='link-item'><a href=''>Chat</a></li>
//           <li className='link-item post-btn'><a href='' onClick={handleShowForm}>Post</a></li>
//         </ul>
//       </div>
//       {/* <ProductView/> */}
//       {/* <AddProductForm /> */}
//       {/* Put here temporarily - will modify where to put later */}
//       {showForm ? <AddProductForm /> : <ProductView />}
//     </div>
  );
}

export default App;
