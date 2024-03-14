import * as React from 'react';
// import * as Progress from 'react-native-progress';
import { Animated, Image, StyleSheet, Text, View, Button } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const MyProgressBar = () => (
  <ProgressBar progress={0.3} styleAttr="Horizontal" indeterminate={true} color='rgba(100,10,10,1)'/>
)

export default function Onboarding3({ navigation }) {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.img} 
        source="{require('@expo/snack-static/react-native-logo.png')}"
      />
      <Text style={styles.title}>
        ONBOARDING{'\n'}INTRO 3
      </Text>
      <Text style={styles.description}>
        Initiate chat with the seller to show your interst in purchasing their products and services!
      </Text>
      <View style={styles.bar}>
        <Animated.View style={styles.progress}/>
      </View>
      <Button title='Tap to Begin'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },
  img: {
    marginBottom: 30
  }, 
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  description: {
    marginBottom: 70,
    textAlign: 'center'
  },
  bar: {
    height: 7,
    width: '90%',
    backgroundColor: 'lightgrey',
    flexDirection: 'row',
    marginBottom: 15
  },
  progress: {
    backgroundColor: 'black',
    width: '100%'
  }
});