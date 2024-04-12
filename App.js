import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import { AppProvider } from './AppContext';
import { Redirect, useRootNavigationState, useRouter } from 'expo-router';
import auth from '@react-native-firebase/auth';
import React, { useState, useEffect } from 'react';
import firebaseConfig from './firebaseConfig';
import { useNavigationContainerRef, Red} from 'expo-router';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import TabLayout from './app/(tabs)/_layout';
import AppLoading from 'expo-app-loading';
import Home from './app/(tabs)/Home';
import {AuthContainer} from './services/authContainer';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
// const navigationRef = React.useRef(null);
GoogleSignin.configure({
  webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
});

  export default function App() {
    // const user = authContainer()
    // const { user, initializing} = AuthContainer();
    // const router = useRouter();
    // const navigation = useNavigation();
    // const navigationState = useRootNavigationState();

    // if (initializing) {
    //   return <Text>Loading...</Text>;
    // }

    
    return (
      // <NavigationContainer>
      //   {user ? (
      //     <Stack.Navigator>
      //       <Stack.Screen name="Home" component={Home} options={{ headerShown: true }}/>
      //       <Stack.Screen name="Tab" component={TabLayout} options={{ headerShown: true }} />
      //       {/* Other screens when user is logged in */}
      //     </Stack.Navigator>
      //   ) : (
      //     <Stack.Navigator>
      //       <Stack.Screen name="AuthContainer" component={AuthContainer} options={{ headerShown: true }}/>
      //       {/* Other screens when user is not logged in */}
      //     </Stack.Navigator>
      //   )}
      // </NavigationContainer>
    // );

    // if (!user) {
    //   console.log('redirecting to login');
    //   // router.replace('./auth');
    //   // return <Redirect href="./authContainer"/>;
    //   navigation.navigate('AuthContainer');
    // } else if (user) {
    //   console.log('redirect to home');
    //   // router.replace('../app/(tabs)/Home');
    //   // return <Redirect href="../app/(tabs)/Home"  />;
    //   navigation.navigate('Home');
    // }

    // return <NavigationContainer>{!navigationState?.key ? <Text>Loading...</Text> : <></>}</NavigationContainer>;

    // return (
    // <SafeAreaProvider>
    //   <AuthContainer />
    // </SafeAreaProvider>

  // <NavigationContainer>
  //   <AuthContainer />
  // </NavigationContainer>

    // <NavigationContainer>
    // <Stack.Navigator initialRouteName="Auth">
    //   <Stack.Screen name="Auth" component={AuthContainer} options={{ headerShown: true }} />
    //   <Stack.Screen name="Main" component={BottomTab} options={{ headerShown: true }} />
    // </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   {user ? <Home /> : <AuthContainer />}
    //   {/* <AuthContainer /> */}
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthContainer} options={{ headerShown: true }} />
        <Stack.Screen name="Tab" component={TabLayout} options={{ headerShown: true }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}
