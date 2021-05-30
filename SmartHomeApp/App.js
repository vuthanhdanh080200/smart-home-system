import React from "react";
import NavBar from "./source/components/navBar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import MQTTConnection from "./source/mqtt/MQTTConnection";
import { Buffer } from 'buffer';
import { useEffect } from "react";

export default function App() {
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}
