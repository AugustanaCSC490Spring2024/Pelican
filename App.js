import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { AppProvider } from './AppContext';
import { Redirect, useRootNavigationState } from 'expo-router';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import AuthContainer from './services/authContainer';
import firebaseConfig from './firebaseConfig';
import { useNavigationContainerRef} from 'expo-router';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
});

  export default function App() {

  return (

    // <SafeAreaProvider>
    //   {/* <NavigationContainer> */}
    //     <Stack.Navigator
    //       options={{ headerShown: false }} 
    //       // initialRouteName='AuthContainer'
    //       >
    //       <Stack.Screen name="Onboarding" component={Onboarding}/>
    //       <Stack.Screen name="AuthContainer" component={AuthContainer} />
    //     </Stack.Navigator >
    //   {/* </NavigationContainer> */}
    // </SafeAreaProvider>

    <SafeAreaProvider>
      <AppProvider>
        <View>
          <AuthContainer />
        </View>
      </AppProvider>
  </SafeAreaProvider>
  )
}

