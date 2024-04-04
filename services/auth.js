import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import LogoImage from '../assets/monochrome-icon.png';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {useRouter} from 'expo-router';
import AppIntroSlider from 'react-native-app-intro-slider';
import Onboarding from '../screens/Onboarding';
import OnboardingSwiper from '../screens/onboardingSwiper';

export default function Auth(){
  // Log in/ Sign up 
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: "354512485882-kl4hbo3936mu38lm19k8sq4pnvg54jm4.apps.googleusercontent.com",
    iosClientId: "354512485882-5kbk16p57ig6nvrdaj2rlobc5ngd0jfq.apps.googleusercontent.com",
  });

  const isSignedIn = async () => {
      const isSignedIn = await GoogleSignin.isSignedIn();
      setState({ isLoginScreenPresented: !isSignedIn });
  };

  const getCurrentUser = async () => {
      const currentUser = await GoogleSignin.getCurrentUser();
      setState({ currentUser });
  };

  const hasPreviousSignIn = async () => {
    const hasPreviousSignIn = GoogleSignin.hasPreviousSignIn();
    setState({ hasPreviousSignIn });
  };

  const router = useRouter();

  const signIn = async () => {
      try {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential).then(() => router.replace('../screens/Home'));
        
        // ALternatvie way
        // auth().signInWithCredential(auth.GoogleAuthProvider.credential(user.idToken));

      } catch (error) {
        console.log('error', error.code, error.message)
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    const signOut = async () => {
      try {
        await GoogleSignin.signOut();
        setState({ user: null }); // Remember to remove the user from your app's state as well
      } catch (error) {
        console.error(error);
      }
    };

    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.sliderContainer}>
          {/* <Onboarding /> */}
          <OnboardingSwiper />
        </View>
        <View style={styles.loginContainer}>
          <Image style={styles.image} source={LogoImage} />
          <Text style={styles.title}>WELCOME TO {'\n'}PELICAN MARKETPLACE </Text> 
          <Text style={styles.text}>Please sign up or log in with your Augustana account to ensure the safety of our community!</Text>
          <GoogleSigninButton
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
              // disabled={this.state.isSigninInProgress}
          />
        </View>
      </SafeAreaView>
    )
}



const styles = StyleSheet.create({
  container: {
    // display: 'flex',
    // flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 25,
    paddingVertical: 50,
    minHeight: '100%',
  },
  sliderContainer: {
    // display: 'flex',
    flex: 2,
    alignItems: 'center',
    paddingVertical: 10,
  },
  loginContainer: {
    // display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginVertical: 20,
  },
  text: {
    color: 'black',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center'
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
})