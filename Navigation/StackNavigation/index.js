import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../Screen/HomeScreen';
import Welcome from '../../Screen/WelcomeScreen/Index';
import ButtonScreen from '../../Screen/LoginScreen/ButtonScreen';
import Vendor from '../../Screen/LoginScreen/Vendor/Index';
import Customer from '../../Screen/LoginScreen/customer/Index';
import CustomerSignUp from '../../Screen/SignupScreen/Customer/Index';
import VendorSignUp from '../../Screen/SignupScreen/Vendor/Index';
import HomeVendor from '../../Screen/HomeScreen/HVendor';
export default function Stack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen name="Welcome" component={Welcome} options={{
        headerShown: false
      }}  />
      {/* <Stack.Screen name="Home" component={Home} options={{
        headerShown : "Home"
      }}/> */}
      <Stack.Screen name='Login' component={ButtonScreen} options={{
        headerShown: false
      }}/>
      <Stack.Screen name='Vendor' component={Vendor}  options={{
        headerTitle:"LogIn"
      }}/>
      <Stack.Screen name='Customer' component={Customer}  options={{
        headerTitle:"LogIn"
      }}/>
      <Stack.Screen name='customerSignUp' component={CustomerSignUp}  options={{
        headerTitle:"SignUp"
      }}/>
      <Stack.Screen name='vendorSignUp' component={VendorSignUp}  options={{
        headerTitle:"SignUp"
      }}/>
      <Stack.Screen name='homeVendor' component={HomeVendor}  options={{
        headerTitle:"Home"
      }}/>
    </Stack.Navigator>
  );
}
