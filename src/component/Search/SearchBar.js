import React from 'react';
import './Search.css'

const SearchBar = ({ searchQuery, handleChange }) => { 
  return (
    <div className='search-bar'>
      <input 
        className='search-input' 
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
