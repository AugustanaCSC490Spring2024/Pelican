import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { AppProvider } from './AppContext';
import { Redirect, useRootNavigationState } from 'expo-router';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import AuthContainer from './services/authContainer';
import firebaseConfig from './firebaseConfig';
import { useNavigationContainerRef} from 'expo-router';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import BottomTab from './app/(tabs)/bottomTab';

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
});

  export default function App() {

  return (
    <SafeAreaProvider>
      <AuthContainer />
    </SafeAreaProvider>
  )
}
