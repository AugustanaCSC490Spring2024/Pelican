import { db } from "../../data/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

const readProducts = async () => {
    try {
        const productRef = collection(db, 'products');
        const snapshot = await getDocs(productRef);
        const products = snapshot.docs.map(product => ({ ...product.data(), key: product.id }));
        return products;
    } catch (err) {
        console.error(err);
    }
};

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        readProducts().then((products) => {
            setProducts(products);
        });
    }, []);
    return products;
}

export default useProducts;