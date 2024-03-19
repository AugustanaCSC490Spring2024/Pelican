import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPage from "./screens/LandingPage";
import Onboarding from "./screens/Onboarding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator 
          options={{ headerShown: false }} 
          initialRouteName='Landing'
          >
          <Stack.Screen name="Landing" component={LandingPage}/>
          <Stack.Screen name="Onboarding" component={Onboarding}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}