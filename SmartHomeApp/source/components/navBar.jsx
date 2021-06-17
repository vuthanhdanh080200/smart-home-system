import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Images from "../config/images";
import Styles from "../config/styles";

import HomeScreen from "../home-screen/homeScreen";
import SettingsScreen from "../setting-screen/settingsSreen";
import SystemScreen from "../system-screen/systemScreen";

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

function NotificationScreen() {
  let text = Data.isTimerOn ? "Yes" : "No";

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{text}</Text>
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

function MyTabBar({ state, navigation }) {
  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const label = route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            onPress={onPress}
            style={{ flex: 1 }}
            key={route.name}
          >
            <Text
              style={{
                color: isFocused ? "#673ab7" : "#222",
                fontSize: 10,
                backgroundColor: "aqua",
              }}
            >
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const NavBar = () => {
  let mes = {
    Message: "HOHO",
  };

  return (
    <React.Fragment>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Settings">
        <Tab.Screen
          tabBar
          name="Report"
          component={ReportScreen}
          initialParams={mes}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={NotificationScreen} />
        <Tab.Screen name="System" component={SystemScreen} />
      </Tab.Navigator>
      <Image source={Images.logo} style={Styles.logo} />
    </React.Fragment>
  );
};

export default NavBar;
