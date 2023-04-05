import React from 'react';
import { View, Text } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View>
      <Text>Welcome to my app!</Text>
      <RegistrationScreen />
      <LoginScreen />
    </View>
  );
}
