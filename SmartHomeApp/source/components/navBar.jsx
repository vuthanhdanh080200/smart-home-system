import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Images from "../config/images";
import Styles from "../config/styles";

import HomeStackScreen from "../home-screen/homeScreen";
import SettingsScreen from "../setting-screen/settingsSreen";
import SystemScreen from "../system-screen/systemScreen";
import NotificationStackScreen from "../notification-screen/notificationScreen";
import ReportStackScreen from "../report-screen/reportScreen";

import Data from "../database/data";
const Tab = createBottomTabNavigator();

function ReportScreen({ navigation, route }) {
  const { Message } = route.params;
  const onPressHandler = () => {
    navigation.setParams({ Message: "DANH DEP TRAI" });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="TEST" onPress={onPressHandler} />
      <Text>{route.params.Message}</Text>
    </View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: () => {
    // You can return any component that you like here!
    let sourceImg;
    if (route.name === "Report") {
      sourceImg = Images.navBarImg.report;
    } else if (route.name === "Settings") {
      sourceImg = Images.navBarImg.settings;
    } else if (route.name === "Home") {
      sourceImg = Images.navBarImg.home;
    } else if (route.name === "Notification") {
      sourceImg = Images.navBarImg.notification;
    } else if (route.name === "System") {
      sourceImg = Images.navBarImg.system;
    }

    return <Image source={sourceImg} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerTitleAlign: "center",
});

const NavBar = () => {
  return (
    <React.Fragment>
      <StatusBar />
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Settings">
        <Tab.Screen tabBar name="Report" component={ReportStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Notification" component={NotificationStackScreen} />
        <Tab.Screen name="System" component={SystemScreen} />
      </Tab.Navigator>
      <Image source={Images.logo} style={Styles.logo} />
    </React.Fragment>
  );
};

export default NavBar;
