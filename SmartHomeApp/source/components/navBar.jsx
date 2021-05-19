import React from "react";
import { Text, View, Image, StatusBar, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Images from "../config/images";
import Styles from "../config/styles";

import HomeScreen from "../home-screen/homeScreen";
import SettingsScreen from "../setting-screen/settingsSreen";

const Tab = createBottomTabNavigator();

function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Report!</Text>
    </View>
  );
}

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Report!</Text>
    </View>
  );
}

function SystemScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>HAHA</Text>
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
  return (
    <React.Fragment>
      <Tab.Navigator screenOptions={screenOptions} initialRouteName="Settings">
        <Tab.Screen tabBar name="Report" component={ReportScreen} />
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
