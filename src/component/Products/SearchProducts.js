import { React, useState, useEffect } from 'react';
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../data/firebase";
import SearchComponent from '../Search/SearchBar.js';
import ShowProducts from './showProducts';

const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const fetchProducts = async () => {
        try {
        const q = query(collection(db, 'products'), where('lowercaseName', '>=', searchQuery.toLowerCase()), where('lowercaseName', '<=', searchQuery.toLowerCase() + '\uf8ff'));
            
        // gets the documents from the firestore data based on the query
        const querySnapshot = await getDocs(q);
            
        // Grabs the detailed data from the firestore documents
        const productsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    
        setProducts(productsData);
    
        } catch (error) {
            console.error('Error searching products:', error);
        }
    };
        
    // Call fetchProducts whenever searchQuery changes
    useEffect(() => {
        fetchProducts(searchQuery);
    }, [searchQuery]);
    
    return (
        <div>
            {/* <SearchComponent searchQuery={searchQuery} handleChange={handleChange} /> */}
            <ShowProducts products={products} />
        </div>
    );
}

export default SearchProducts;