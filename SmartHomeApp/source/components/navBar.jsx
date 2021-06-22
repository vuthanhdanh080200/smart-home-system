import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Images from "../config/images";
import Styles from "../config/styles";

import HomeStackScreen from "../home-screen/homeScreen";
import SettingsScreen from "../setting-screen/settingsSreen";
import SystemScreen from "../system-screen/systemScreen";
import NotificationStackScreen from "../notification-screen/notificationScreen";
import ReportStackScreen from "../report-screen/reportScreen";
import dataProcess from "../notification-screen/dataProcess";

const Tab = createBottomTabNavigator();

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
    } else if (route.name === "About us") {
      sourceImg = Images.navBarImg.system;
    }

    return <Image source={sourceImg} />;
  },
  tabBarActiveTintColor: "tomato",
  tabBarInactiveTintColor: "gray",
  headerTitleAlign: "center",
});

const NavBar = () => {
  const data = dataProcess();
  var notification_count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].read == false) notification_count++;
  }
  var tabBarBadge_option = () => {
    if (notification_count != 0) return { tabBarBadge: notification_count };
    else return {};
  };
  return (
    <React.Fragment>
      <StatusBar />
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Home">
        <Tab.Screen tabBar name="Report" component={ReportStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen
          name="Notification"
          component={NotificationStackScreen}
          options={tabBarBadge_option}
        />
        <Tab.Screen name="About us" component={SystemScreen} />
      </Tab.Navigator>
      <Image source={Images.logo} style={Styles.logo} />
    </React.Fragment>
  );
};

export default NavBar;
