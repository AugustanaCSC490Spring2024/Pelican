import React, { useState, useEffect, useRef } from 'react';

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

    const handleSubmit = (e) => {
        e.preventDefault();
        product.id = Date.now();
        console.log(product);
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
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} />
            <input type="text" name="price" placeholder="Price" value={product.price} onChange={handleChange} />
            <input type="text" name="seller" placeholder="Seller" value={product.seller} onChange={handleChange} />
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

export default AddProductForm;