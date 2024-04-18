import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://pelican-marketplace-app-default-rtdb.firebaseio.com/.json")
      .then((response) => response.json())
      .then((json) => {
        const results = (json) => {
          return (
            json
          );
        };
        setResults(results);
      });
  };
  // TODO: Link this up to autocomplete results once data is in FB

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};