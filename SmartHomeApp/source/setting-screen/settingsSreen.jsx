import React, { useState } from "react";
import { Text, View, StatusBar } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";
import OtherSettingsStackScreen from "./otherSettingsScreen";
import LightTimerStackScreen from "./lightTimerScreen";
import antiTheftTimerStackScreen from "./antiTheftTimerScreen";

import Styles from "./styles";

const Drawer = createDrawerNavigator();

const SettingsScreen = (props) => {
  return (
    <Drawer.Navigator initialRouteName="Light timer">
      <Drawer.Screen
        options={{ title: "Light timer" }}
        name="Light timer"
        component={LightTimerStackScreen}
        navigation={props}
      />
      <Drawer.Screen
        options={{ title: "Anti theft timer" }}
        name="AntiTheft timer"
        component={antiTheftTimerStackScreen}
        navigation={props}
      />
      <Drawer.Screen
        options={{ title: "Other settings" }}
        name="Other settings"
        component={OtherSettingsStackScreen}
        navigation={props}
      />
    </Drawer.Navigator>
  );
};

export default SettingsScreen;
