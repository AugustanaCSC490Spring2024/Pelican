import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { AppProvider } from './AppContext';
import { Redirect, useRootNavigationState, useRouter } from 'expo-router';
import auth from '@react-native-firebase/auth';
import React from 'react';
import { useNavigationContainerRef, Red} from 'expo-router';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TabLayout from './app/(tabs)/_layout';
import AppLoading from 'expo-app-loading';
import Home from './app/(tabs)/Home';
import {AuthContainer} from './services/authContainer';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
});

  export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthContainer} options={{ headerShown: true }} />
        <Stack.Screen name="Tab" component={TabLayout} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
