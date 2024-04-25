import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../data/firebase';

const EachProductView = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = db.ref(`products/${productId}`);
        const snapshot = await productRef.once('value');
        const productData = snapshot.val();
        setProduct({
          ...productData,
          key: snapshot.key,
      });
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }; 
    fetchProduct(); 
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
}

export default EachProductView;
