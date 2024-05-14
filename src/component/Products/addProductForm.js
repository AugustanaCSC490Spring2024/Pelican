import React, { useState, useRef } from 'react';
import { db, storage, auth } from '../../data/firebase';
import { collection, addDoc } from 'firebase/firestore'; 
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import defaultImage from '../../assets/icon.png';
import '../../styles/addProductFrom.css';


function AddProductForm() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        // seller: '',
        description: '',
        status: 'available',
        image: '',
        category: '',
        location: '',
        isShoppingList: false,
        user: '',
    });
    const fileInput = useRef(null);

    const [message, setMessage] = useState("");
    const [image, setImage] = useState(defaultImage);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    }

    // Handle Image Upload
    const handleImageChange = (e) => {
        setProduct({
            ...product,
            image: URL.createObjectURL(e.target.files[0]),
        });
    }

    const handleImageUpload = (e) => {
        setImage(e.target.files[0]);
    };

    const saveImage = async () => {
        // if (image === null) return defaultImage;
        if (image !== defaultImage) {
            const imageRef = ref(storage, `images/${product.id}`);
            const snapshot = await uploadBytes(imageRef, image);
            console.log('Uploaded image successfully!');
            const url = await getDownloadURL(snapshot.ref);
            console.log('File available at', url);
            return url;
        } else {
            return defaultImage;
        }
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        product.id = Date.now();
        product.user = auth.currentUser.displayName;
        console.log(product);
        try {
            const imageUrl = await saveImage();
            product.image = imageUrl;
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
        // fileInput.current.value = '';
        setImage(defaultImage);
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='postForm'>
                <h2 className='title'>Post Your Product</h2>
                {/* <h3 className='miniTitle'>Product Name</h3>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Product Name" 
                    spellCheck="false"
                    autoCapitalize='words'
                    value={product.name} 
                    onChange={handleChange} 
                    className='nameInputWrapper'
                /> */}

                <div className="wave-group">
                    <input required type="text" className="input" 
                    name="name" 
                    spellCheck="false"
                    autoCapitalize='words'
                    value={product.name} 
                    onChange={handleChange}/>
                    <span className="bar"></span>
                    <label className="label">
                        <span className="label-char" style={{"--index": 0}}>P</span>
                        <span className="label-char" style={{"--index": 1}}>r</span>
                        <span className="label-char" style={{"--index": 2}}>o</span>
                        <span className="label-char" style={{"--index": 3}}>d</span>
                        <span className="label-char" style={{"--index": 4}}>u</span>
                        <span className="label-char" style={{"--index": 5}}>c</span>
                        <span className="label-char" style={{"--index": 6}}>t</span>
                        <span className="label-char" style={{"--index": 7}}>&nbsp;</span>
                        <span className="label-char" style={{"--index": 8}}>N</span>
                        <span className="label-char" style={{"--index": 9}}>a</span>
                        <span className="label-char" style={{"--index": 10}}>m</span>
                        <span className="label-char" style={{"--index": 11}}>e</span>
                    </label>
                </div>

                <div className="wave-group">
                    <input required type="number" className="input" name="price" 
                    value={product.price} 
                    onChange={handleChange} />
                    <span className="bar"></span>
                    <label className="label">
                        <span className="label-char" style={{"--index": 0}}>P</span>
                        <span className="label-char" style={{"--index": 1}}>r</span>
                        <span className="label-char" style={{"--index": 2}}>i</span>
                        <span className="label-char" style={{"--index": 3}}>c</span>
                        <span className="label-char" style={{"--index": 4}}>e</span>
                        <span className="label-char" style={{"--index": 5}}>($)</span>
                    </label>
                </div>

                {/* <h3 className='miniTitle'>Price ($)</h3>
                <input 
                    type="text" 
                    name="price" 
                    placeholder="Price" 
                    value={product.price} 
                    onChange={handleChange} 
                    className='nameInputWrapper'
                /> */}
                <h3 className='miniTitle'>Product Description</h3>
                <textarea 
                    name="description" 
                    placeholder="Type your product details..." 
                    value={product.description} 
                    onChange={handleChange} 
                    cols="40" 
                    rows="5" 
                    className='inputBox'
                />
                <h3 className='miniTitle'>Image</h3>
                <input 
                    type="file" 
                    name="image" 
                    ref={fileInput} 
                    onChange={handleImageUpload} 
                    className='nameInputWrapper'
                />
                <h3 className='miniTitle'>Category</h3>
                <select 
                    name="category" 
                    placeholder="Category" 
                    value={product.category} 
                    onChange={handleChange} 
                    className='nameInputWrapper'
                >
                    <option>Electronics</option>
                    <option>Furnitures</option>
                    <option>School Supplies</option>
                    <option>Apparells</option>
                    <option>Miscellaneous</option>
                </select>
                <div>
                    <button className='btn-12' type="submit" style={{ background: 'black' }}><span>Add Product</span></button>
                    <button className='btn-12' type="button" style={{ background: 'black' }} onClick={resetForm}><span>Reset Form</span></button>
                </div>
            </form>
        </div>
    )
}

const styles = {
    nameInputWrapper: {
        fontSize: '1em',
        fontWeight: 'bold',
        display: 'flex',
        marginTop: '10px',
        height: '52px !important', 
        resize: 'none', 
        border: 'none',
        marginBottom: '15px',
        backgroundColor: '#ddd',
        padding: '3px 5px',
        borderRadius: '10px',
        // width: '50%'
    },
    inputBox: {
        backgroundColor: '#ddd',
        padding: '3px 5px',
        borderRadius: '10px',
        fontWeight: 'bold',
        // width: '50%'
    },
    title: {
        fontSize: '3em',
        fontWeight: 'bold',
        marginBottom: '50px'
    },
    btn: {
        padding: '10px 150px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '15px',
        marginRight: '15px',
        fontWeight: 'bold',
    },
    miniTitle: {
        fontSize:'1.5em',
        marginBottom: '10px',
        fontWeight: 'bold'
    }
}

export default AddProductForm;