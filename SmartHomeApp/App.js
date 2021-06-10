import React from "react";
import NavBar from "./source/components/navBar";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
// import { Buffer } from 'buffer';

// global.Buffer = Buffer;

// var mqtt = require('mqtt');
// const feedTopic = 'lengochieu6102/feeds/bk-iot-led';

export default function App() {
//   var client = mqtt.connect("tcp://io.adafruit.com:1883", {
//     username: "lengochieu6102",
//     password: "aio_OKBC45gsN3d6VlO1WUw0rlDLl9Sr"
// })

//   client.on("connect", () => {
//     console.log('connected');
//   });
  
  return (
    <NavigationContainer>
      <NavBar />
    </NavigationContainer>
  );
}
