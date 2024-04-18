import useProducts from "./useProducts";
import logo from '../../assets/icon.png'
import React, { StyleSheet } from 'react';
// import { StyleSheet } from 'react-native';


const ProductView = () => {
    const products = useProducts();
    return (
        <div>
            {products.map((product) => (
                <div key={product.key} style={styles.post}>
                    <img alt="img" src={logo} style={styles.prdImg}/>
                    <div style={styles.prdInfo}>
                        <h2 style={styles.prdInfoH5}>{product.name}</h2>
                        <p>{product.user}</p>
                        <p>${Number(product.price).toLocaleString()}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const styles = {
    /* Post Style */
    post: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        marginBottom: '5px',
        marginTop: '5px',
    },
    prdImg: {
        width: '100%',
    },
    prdInfo: {
        paddingLeft: '15px',
        paddingTop: '15px',
    },
    prdInfoH5: {
        fontSize: '2em',
        margin: '0',
    },
};

export default ProductView;