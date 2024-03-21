import React from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
} from 'react-native';
import LogoImage from './assets/monochrome-icon.png';

export default function App() {
  const handlePress = () => {
    console.log('Button pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={LogoImage} />
      <Text style={styles.title}>LOG IN / SIGN UP</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim
        posuere nunc, at pharetra nisi viverra at.
      </Text>
      {/* refactor with google authentication package */}
      <TouchableOpacity style={styles.googleButton} onPress={handlePress}>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={handlePress}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', 
    padding: 8,
  },
  image: {
    width: 150, 
    height: 150, 
    borderRadius: 20,
    marginBottom: 24, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  paragraph: {
    textAlign: 'center',
    marginBottom: 24, 
    paddingHorizontal: 32, 
  },
  googleButton: {
    backgroundColor: '#4285F4', 
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 16, 
  },
  googleButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  createAccountButton: {
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    marginBottom: 16,
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
