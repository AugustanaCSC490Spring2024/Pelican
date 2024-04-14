import React, { createContext, useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useRouter, useSegments, Redirect, useRootNavigationState } from 'expo-router';
import Home from '../app/(tabs)/home';
import Auth from './auth';
import { useNavigation } from '@react-navigation/native';

export const AuthContext = createContext({
  user: null,
  initializing: false,
});

export function AuthContainer() {
  const { user, initializing } = React.useContext(AuthContext);

  if (initializing) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ height: '100%' }}>
      {user ? (
        <Home />
      ) : (
        <Auth />
      )}
    </View>
  );
}

export const AuthProvider = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(userState => {
      setUser(userState);
      setInitializing(false);
    });
    return unsubscribe;
  }, []);

  const useProtectedRoute = () => {
    useEffect(() => {
      const inTabsGroup = segments[0] === '(tabs)';
      if (!user && inTabsGroup) {
        router.replace('/auth');
        console.log('NOT AUTHENTICATED: ');
      } else if (user && !inTabsGroup) {
        console.log('AUTHENTICATED: ', user);
        router.replace('/(tabs)/home');
      }
    }, [user]);
  };

  useProtectedRoute();

  const value = {
    user,
    initializing,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
