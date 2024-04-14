import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TabLayout from './app/(tabs)/_layout';
import Home from './app/(tabs)/home';
import {AuthContainer} from './services/authContainer';
import Post from './app/(tabs)/Post';
import Chat from './app/(tabs)/Chat';

const Stack = createNativeStackNavigator();

GoogleSignin.configure({
  webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
});

  export default function App() {
    return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Tab">
        <Stack.Screen name="Auth" component={AuthContainer} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
        <Stack.Screen name="Tab" component={TabLayout} options={{ headerShown: true }} />
        {/* <Stack.Screen name="Post" component={Post} options={{ headerShown: true }} />
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} /> */}
      </Stack.Navigator>
    </NavigationContainer>

    // <NavigationContainer>
    //   <AuthContainer />
    //   {/* <Home />
    //   <TabLayout /> */}
    // </NavigationContainer>
    )
}
