import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
import React from 'react-native';
import LogoImage from './assets/monochrome-icon.png';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Auth(){
    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        setState({ isLoginScreenPresented: !isSignedIn });
    };

    const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        setState({ currentUser });
    };

    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setState({ userInfo });
        } catch (error) {
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
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={LogoImage} />
            <Text style={styles.title}>WELCOME TO PELICAN MARKETPLACE</Text> 
            <Text style={styles.text}>
                Please sign up or log in with your Augustana account to ensure the safety of our community!
            </Text>
            <GoogleSigninButton
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
                disabled={this.state.isSigninInProgress}
            />;
        </SafeAreaView>
    )
}