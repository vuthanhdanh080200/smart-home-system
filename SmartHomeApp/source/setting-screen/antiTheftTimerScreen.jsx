import React, { useState } from "react";
import { Text, View, Switch, Button } from "react-native";
import Data from "../database/data";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function antiTheftTimerStackScreen() {
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
      <Stack.Screen name="Anti theft timer" component={AntiTheftTimerScreen} />
    </Stack.Navigator>
  );
}

function AntiTheftTimerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AntiTheftTimerScreen!</Text>
    </View>
  );
}

export default antiTheftTimerStackScreen;
