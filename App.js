ios// import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React, {useState} from 'react';

import LandingPage from "./screens/LandingPage";
import OB1 from "./screens/Onboarding1";
import OB2 from "./screens/Onboarding2";
import OB3 from "./screens/Onboarding3";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Landing'>
        <Stack.Screen name="Landing" component={LandingPage}/>
        <Stack.Screen name="OB1" component={OB1}/>
        <Stack.Screen name="OB2" component={OB2}/>
        <Stack.Screen name="OB3" component={OB3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
