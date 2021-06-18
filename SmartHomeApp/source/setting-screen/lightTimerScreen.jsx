import React, { useState, useEffect, Component } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getCollection, addData, sw } from "../api/firebaseApi";
import ListItems from "./component/listItems";

const Stack = createStackNavigator();
function LightTimerStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "cyan",
        },
      }}
    >
      <Stack.Screen name="Light timer" component={LightTimerScreen} />
    </Stack.Navigator>
  );
}

const LightTimerScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ListItems />
      {AddTime()}
    </View>
  );
};

const add = (querySnapshot) => {
  var count = 0;
  querySnapshot.forEach((doc) => {
    count = count + 1;
  });
  let date = new Date();
  let data = {
    id: count,
    isEnabled: false,
    date: date.toString(),
    mode: "date",
    show: false,
  };
  let path = "Danh/lightTimer/" + count;
  addData(path, data);
};

const AddTime = () => {
  let path = "Danh/lightTimer";
  return <Button title="Add Timer" onPress={() => getCollection(path, add)} />;
};

export default LightTimerStackScreen;
