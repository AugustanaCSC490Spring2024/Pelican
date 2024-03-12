// import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, Alert, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const IntroScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Campus
        {"\n"}
        Marketplace
        {"\n"}
        App
      </Text>
      <Button style={styles.button} onPress={()=>navigation.navigate('Home')} />
    </View>
  );
}

const HomeScreen = ({navigation}) => {
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="IntroScreen">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'left',
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