
import React from "react";
import { View,} from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

export default function App() {
  return (
    <View>
      <RegistrationScreen />
      <LoginScreen />
    </View>
  );
}
