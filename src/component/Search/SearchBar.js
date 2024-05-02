import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../data/firebase.js';
import './Search.css'

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true); // Set loading state to true while fetching data
        const q = query(collection(db, 'products'), where('lowercaseName', '>=', searchQuery.toLowerCase()), where('lowercaseName', '<=', searchQuery.toLowerCase() + '\uf8ff'));
        
        // gets the documents from the firestore data based on the query
        const querySnapshot = await getDocs(q);
        
        // Grabs the detailed data from the firestore documents
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsData);

        // TODO: Find a way to get product list to not show for a split second when the searchQuery updates

        // setTimeout(() => {
        //   setProducts(productsData); 
        // }, 300); // Adjust the delay time as needed

      } catch (error) {
        console.error('Error searching products:', error);
      }
      // } finally {
      // setLoading(false); // Set loading state to false after data fetching completes
      // }
    };

    // Called if the value of the searchQuery changes
    fetchData();
  }, [searchQuery]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value); 
  };

  return (
    <div>
      <input 
        className='search-input' 
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
      />
      {/* {loading && <div>Loading...</div>}  */}
      {/* {!loading && searchQuery.trim() !== '' && products.length > 0 && ( */}
      {searchQuery.trim() !== '' && products.length > 0 && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.name}</li>
            ))}
          </ul>
      )}
    </div>
  );
};

export default SearchComponent;
