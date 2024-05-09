import useProducts from "./useProducts";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/products.css'

const AllProductView = () => {
    const products = useProducts();
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        productId ? navigate(`/product/${productId}`, {replace: false}) : console.log('No product id');
    };

    return (
        <div className="post" style = {styles.post}>
            {products.map((product) => ( 
                // <Link to={`/product/${product.id}`} key={index}>
                    <div key={product.key} product={product} style={styles.postItem} className='post-item' onClick={() => handleProductClick(product.key)}>
                        <img alt="img" className='prd-img' src={product.image} style={styles.prdImg}/>
                        <div className='prd-des'>
                            <h2 className='prd-title' style={styles.prdInfoH2}> {product.name} - ${Number(product.price).toLocaleString()} </h2>
                            <p className='prd-seller' style ={styles.prdUser}> @{product.user} </p>
                        </div>
                    </div>
                // </Link>
            ))}
        </div>
    );
}

const styles = {}
    /* Post Style */
//     post: {
//         display: 'grid',
//         gridTemplateColumns: '2fr 2fr 2fr',
//     },
//     postItem: {
//         margin: '5px',
//         border: '5px',
//     },
//     prdImg: {
//         width: '100%',
//         height: '500px',  
//         objectFit: 'cover',
//     },
//     prdUser: {
//         fontSize: '1.5em',
//         margin: 10,
//     },
//     prdInfoH2: {
//         fontSize: '2em',
//         margin: 10,
//     }
// };

export default AllProductView;