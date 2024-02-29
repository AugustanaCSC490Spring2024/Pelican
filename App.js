// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Alert, StyleSheet, Text, View } from 'react-native';

const setTitle = () => {
  setTitleText("Welcome!");
}


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Campus
        {"\n"}
        Marketplace
        {"\n"}
        App
      </Text>
      <Button style={styles.button} onPress={()=>Alert.alert('You tapped the button!')} title="Tap to Begin"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'left',
    justifyContent: 'center',
    paddingLeft: 30
  },
  name: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 50
  },
  button: {
    // alignItems: 'center',
    // textAlign: 'center',
    // padding: 10,
    // borderRadius: 10,
  }
});