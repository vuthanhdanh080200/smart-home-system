import React from "react";
import { Text, View, StatusBar } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import OtherSettingsScreen from "./otherSettingsScreen";
import LightTimerScreen from "./lightTimerScreen";

import Styles from "./styles";

function HeaderBar() {
  return (
    <View style={Styles.headerBar}>
      <Text style={Styles.textHeaderBar}>Settings</Text>
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

const SettingsScreen = (props) => {
  return (
    <React.Fragment>
      {HeaderBar()}
      <Drawer.Navigator initialRouteName="Light timer">
        <Drawer.Screen options={{ title: "Light timer" }} name="Light timer">
          {(props) => (
            <LightTimerScreen state={props.state} onPress={props.onPress} />
          )}
        </Drawer.Screen>
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
};

export default SettingsScreen;
