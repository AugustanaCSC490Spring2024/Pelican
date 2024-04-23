import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { db } from "../../data/firebase";
// code reference https://youtu.be/sWVgMcz8Q44?si=nfaJRBTvmaHyHq3L

import "./SearchBar.css";
import { collection } from "@firebase/firestore";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  
  const products = collection(db, "products")
  // TODO: Link this up to autocomplete results once data is in FB

  const handleChange = (value) => {
    setInput(value);
    setResults(products)
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
