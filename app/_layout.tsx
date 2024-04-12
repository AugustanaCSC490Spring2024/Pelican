import { Stack, useNavigationContainerRef } from 'expo-router';
import React, {useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../services/authContainer';

export default function AppLayout() {
  const ref  = useNavigationContainerRef();

  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
        </Stack>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
