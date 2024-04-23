import React, { useState, useEffect, useRef } from 'react';
import { db } from '../../data/firebase';
import { collection, addDoc } from 'firebase/firestore'; 

function AddProductForm() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        seller: '',
        description: '',
        status: 'available',
        image: '',
        category: '',
        location: '',
        isShoppingList: false,
    });
    const [message, setMessage] = useState("");
    const fileInput = useRef(null);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    }

    const handleImageChange = (e) => {
        setProduct({
            ...product,
            image: URL.createObjectURL(e.target.files[0]),
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        product.id = Date.now();
        console.log(product);
        try {
            const docRef = await addDoc(collection(db, "products"), product);
            console.log("Document written with ID: ", docRef.id);
            setMessage("Product added successfully");
            resetForm();
        } catch (error) {
            console.error(error);
            setMessage(`Error: ${error.message}`);
        }
    }

    const resetForm = () => {
        setProduct({
            name: '',
            price: '',
            seller: '',
            description: '',
            status: 'available',
            image: '',
            category: '',
            location: '',
            isShoppingList: false,
        });
        fileInput.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px' }}>
            <h2>Add Product</h2>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Product Name" 
                    spellCheck="false"
                    autoCapitalize='words'
                    style={styles.nameInputWrapper}
                    value={product.name} 
                    onChange={handleChange} 
                />
            <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
            {/* Try to get seller's id from authentication */}
            {/* <input type="text" name="seller" placeholder="Seller" value={product.seller} onChange={handleChange} /> */}
            <input type="text" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
            <select name="status" value={product.status} onChange={handleChange}>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>
            <input type="file" name="image" ref={fileInput} onChange={handleImageChange} />
            <input type="text" name="category" placeholder="Category" value={product.category} onChange={handleChange} />
            <input type="text" name="location" placeholder="Location" value={product.location} onChange={handleChange} />
            <button type="submit">Add Product</button>
            <button type="button" onClick={resetForm}>Reset Form</button>
        </form>
    )
}

const styles = {
    nameInputWrapper: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        display: 'flex',
        marginTop: '10px',
        height: '52px !important', 
        resize: 'none', 
        border: 'none', 
    }
}

export default AddProductForm;