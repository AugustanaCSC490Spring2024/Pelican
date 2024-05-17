import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../styles/products.css'
import useProducts from './useProducts';

const ShowProducts = () => {
    const products = useProducts();
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        productId ? navigate(`/product/${productId}`, {replace: false}) : console.log('No product id');
    };

    return (
        <div style = {styles.post} className='post'>
            {products.map((product) => ( 
                    <div key={product.key} product={product} className='post-item' style={styles.postItem} onClick={() => handleProductClick(product.key)}>
                        <img alt="img" className='prd-img' src={product.image} style={styles.prdImg}/>
                        <div className='prd-des' style={{textAlign: 'center'}}>
                            <h2 className='prd-title' style={styles.prdInfoH2}> {product.name} - ${Number(product.price).toLocaleString()} </h2>
                            <p className='prd-seller' style ={styles.prdUser}> @{product.user} </p>
                        </div>
                    </div>
            ))}
        </div>
    );
}

const styles = {}

export default ShowProducts;