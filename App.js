import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screen/HomeScreen';
import Stack from './Navigation/StackNavigation';
import Tab from "./Navigation/TabNavigation/Index";

export default function App() {
  return (
    <NavigationContainer>
      <Stack/>
      {/* <Tab/> */}
      
    </NavigationContainer>
  )
}