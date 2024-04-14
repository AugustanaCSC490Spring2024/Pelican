import { Redirect } from 'expo-router'
import React from 'react'
import TabLayout from './(tabs)/_layout'
import { View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'; 

export default function Index() {
  return (
    // <Redirect href={"/(tabs)/home"}/>
    <Redirect href={"/(tabs)/home"}/>
    // <NavigationContainer>
    //   <View style={{ flex: 1 }}>
    //     <TabLayout />
    //   </View>
    // </NavigationContainer>
  )
}
