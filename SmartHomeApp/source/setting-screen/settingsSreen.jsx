import React from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Images from "../config/images";
import Styles from "../config/styles";

import OtherSettingsScreen from "./otherSettingsScreen";

function HeaderBar() {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "white",
        marginTop: StatusBar.currentHeight,
        borderBottomWidth: 2,
        borderBottomColor: "whitesmoke",
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          textAlign: "left",
          textAlignVertical: "center",
          color: "cyan",
          marginLeft: 10,
        }}
      >
        Settings
      </Text>
    </View>
  );
}

function LightTimerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LightTimerScreen!</Text>
    </View>
  );
}

function AntiTheftTimerScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>AntiTheftTimerScreen!</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function SettingsScreen() {
  return (
    <React.Fragment>
      {HeaderBar()}
      <Drawer.Navigator initialRouteName="Light timer">
        <Drawer.Screen
          options={{ title: "Light timer" }}
          name="Light timer"
          component={LightTimerScreen}
        />
        <Drawer.Screen
          options={{ title: "Anti theft timer" }}
          name="AntiTheft timer"
          component={AntiTheftTimerScreen}
        />
        <Drawer.Screen
          options={{ title: "Other settings" }}
          name="Other settings"
          component={OtherSettingsScreen}
        />
      </Drawer.Navigator>
    </React.Fragment>
  );
}

export default SettingsScreen;
