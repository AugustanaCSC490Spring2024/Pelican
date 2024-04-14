import {Stack} from 'expo-router';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabLayout from '../_layout';

const Stack = createNativeStackNavigator();

export default function Layout() {
  return <Stack screenOptions={{headerShown: false}} />;
  // <Stack.Navigator screenOptions={{headerShown: false}}>
  //     <Stack.Screen name="TabLayout" component={TabLayout} />
  //   </Stack.Navigator>
}
