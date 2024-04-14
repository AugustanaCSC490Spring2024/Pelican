import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image, View, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { saveUserData } from '../../databasemanager'; 

export default function Post() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState(''); 
    const [sellerID, setSellerID] = useState('12345ABC');
    const [sellerName, setSellerName] = useState('ABCD');
    const [selected, setSelected] = React.useState('');

    const categories = [
        {key: '1', value: 'Apparells'},
        {key: '2', value: 'Electronics'},
        {key: '3', value: 'Events'},
        {key: '4', value: 'Furnitures'},
        {key: '5', value: 'Kitchen'},
        {key: '6', value: 'Services'},
        {key: '7', value: 'Textbooks'},
        {key: '8', value: 'etc.'}
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.selectBox}>
                <TouchableOpacity style={styles.camera} onPress={() => { alert('Implement Image Selection Here') }}>
                    <Image 
                        style={styles.img} 
                        source={require('../../assets/cameraRoll.jpeg')}
                    />
                </TouchableOpacity>
                <Text style={styles.camTxt}>Select From Camera Roll</Text>
            </View>
            <Text style={styles.tag}>Product Name</Text>
            <TextInput 
                style={styles.input}
                placeholder='Product Name...'
                value={productName}
                onChangeText={setProductName} />
            <Text style={styles.tag}>Product Price</Text>
            <TextInput 
                style={styles.input}
                placeholder='$$$'
                value={productPrice}
                onChangeText={setProductPrice} />
            <Text style={styles.tag}>Product Description</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Type here...'
                value={productDescription}
                onChangeText={setProductDescription} />
            <View style={styles.view}>
                <Text style={styles.tag}>Choose Category</Text>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={categories} 
                    save="value"
                    style={styles.list}
                />
            </View>
            <Button
                title="Post"
                onPress={() => {
                    if (!productName || !productPrice || !productDescription || !productImage || !sellerID || !sellerName) {
                        alert('Please fill in all the details.');
                        return;
                    }
                    saveUserData(productName, productPrice, productDescription, productImage, sellerID, sellerName)
                        .then(() => alert('Product posted successfully!'))
                        .catch(error => console.error('Failed to post product:', error));
                }}
            />
        </ScrollView>
    );
} 

const styles = StyleSheet.create({
    input: {
        width: '65%',
        height: '7%',
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        marginBottom: 8
    },
    container: {
        padding: 10
    },
    tag: {
        fontSize: 20,
        marginBottom: 5
    },
    selectBox: {
        flexDirection: "row"
    },
    camera: {
        marginBottom: 10,
        flex: 1
    },
    img: {
        width: 100,
        height: 100
    },
    camTxt: {
        flex: 2,
        fontSize: 20,
        paddingTop: 10
    },
    inputBox: {
        width: '100%',
        height: 100,
        borderWidth: 1,
        padding: 5,
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        marginBottom: 8
    },
    view: {
        marginBottom: 20
    }
});
