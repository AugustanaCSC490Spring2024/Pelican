import { db } from "../../data/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

const readProducts = async () => {
    try {
        const snapshot = await getDocs(collection(db, 'products'));
        return snapshot.docs.map(doc => doc.data());
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