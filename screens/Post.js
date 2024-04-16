import { Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Image, View, Button } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import * as RootNavigation from '../RootNavigation';
import camera from '../camera/camera.js';
import { openMediaLibrary } from '../camera/mediaLibrary.js';

export default function App() {
    // const [selected, setSelected] = React.useState('');

    const categories = [
        {key: '1', value: 'Apparells'},
        {key: '2', value: 'Electronics'},
        {key: '3', value: 'Events'},
        {key: '4', value: 'Furnitures'},
        {key: '5', value: 'Kitchen'},
        {key: '6', value: 'Services'},
        {key: '7', value: 'Textbooks'},
        {key: '8', value: 'etc.'}
    ]

    handleOpenMediaLibrary = async () => {
        const chosenPhoto = await openMediaLibrary();
        // Handle the result
    };
      
    handleOpenCamera = async () => {
        RootNavigation.navigate('camera');
    };

    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.selectBox}>
                <TouchableOpacity style={styles.camera} onPress={ this.handleOpenCamera }>
                    <Image 
                        style={styles.img} 
                        source={require('../assets/camera.jpeg')} 
                    />
                </TouchableOpacity>
                {/* <Text style={styles.camTxt}>Take Photo</Text> */}
                {/* <Text style={styles.tag}>Title</Text> */}
                <TouchableOpacity style={styles.cameraRoll} onPress={ this.handleOpenMediaLibrary }>
                    <Image 
                        style={styles.img} 
                        source={require('../assets/cameraRoll.jpeg')} 
                    />
                </TouchableOpacity>
                {/* <Text style={styles.camRollTxt}>Choose Photo</Text> */}
                {/* <Text style={styles.tag}>Title</Text> */}
            </View>
            <Text style={styles.tag}>Title</Text>
            <TextInput 
                style={styles.input}
                placeholder='Product Name...' />
            <Text style={styles.tag}>Price</Text>
            <TextInput 
                style={styles.input}
                placeholder='$$$' />
            <Text style={styles.tag}>Description</Text>
            <TextInput 
                style={styles.inputBox}
                placeholder='Type here...' />
            <View style={styles.view}>
                <Text style={styles.tag}>Category</Text>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={categories} 
                    save="value"
                    style={styles.list}
                />
            </View>
            <Button
                title="Post"
                style={styles.btn}
                accessibilityLabel="Learn more about this purple button"
                onPress={()=>{
                    alert('You have posted a product!');
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
        flex: 1,
        marginBottom: 10
    },
    cameraRoll: {
        flex: 2,
        marginBottom: 10
    },
    img: {
        width: 100,
        height: 100
    },
    camTxt: {
        fontSize: 20,
        marginBottom: 10
    },
    camRollTxt: {
        fontSize: 20,
        marginBottom: 10
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
  
  