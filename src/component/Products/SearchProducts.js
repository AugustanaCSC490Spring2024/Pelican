import  React, { useState, useEffect } from 'react';
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../data/firebase";
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search"; 
import '../Search/Search.css';
 
const SearchProducts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]); 
    const [dropdown, setDropdown] = useState([]); 
    const [product, setProduct] = useState(null);

    const navigate = useNavigate(); 

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchQuery(value);
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(value.toLowerCase())
        );
        setDropdown(filteredProducts); 
    };

    const handleSearch = (event) => {
        event.preventDefault();
        // Here, you can perform the search operation
        console.log(`Searching for: ${searchQuery}`);
      };
      
    const handleProductClick = (product) => {
      product ? navigate(`/product/${product.id}`, {replace: false}) : console.log('No product id');
    };

    // Call fetchProducts whenever searchQuery changes
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productRef = collection(db, 'products'); 
                const querySnapshot = await getDocs(query(productRef));
                const fetchedProducts = querySnapshot.docs.map(doc => {
                  const product = {id: doc.id, ...doc.data()};
                  console.log("Product Id: ", product.id);
                  return product;
                });
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products: ", error);
            }
        };
        fetchProducts();
    }, [searchQuery]);

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            navigate(`/search-results?query=${searchQuery}`);
        }
    };

    return (
        <div style={{ position: 'relative' }}>
          <form onSubmit={handleSearch} >
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleChange}
                style={{ color: 'black' }} 
              />
              <button type="submit"><SearchIcon /></button>
            </div>
          </form>
          {dropdown.length > 0 && (
            <div className="suggestion-list" style={{ position: 'absolute', width: '100%'}}>
              {dropdown.map((product) => (
                <div
                  key={product.uniqueKey}
                  product={product}
                  className="suggestion-item"
                  onClick={() => handleProductClick(product)}
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>
      );
}
 
export default SearchProducts;