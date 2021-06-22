import React, { useState } from "react";
import { Text, View, Switch, Button } from "react-native";
import Data from "../database/data";
import { createStackNavigator } from "@react-navigation/stack";
import { sw, updateData } from "../api/firebaseApi";
import toggleDrawer from "./component/toggleDrawer";
import path from "../config/path";

const Stack = createStackNavigator();

function OtherSettingsStackScreen(props) {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "cyan",
            marginLeft: 40,
          },
        }}
      >
        <Stack.Screen name="Other Settings" component={OtherSettingsScreen} />
      </Stack.Navigator>
      {toggleDrawer(props)}
    </React.Fragment>
  );
}

const defaultSettings = () => {
  let data = {
    isLightOn: false,
    isWarningOn: false,
  };
  updateData(path.isSystemOn, data);
};

function OtherSettingsScreen() {
  return (
    <React.Fragment>
      {itemSetting("Remote warning", path.isWarningOn, "isWarningOn")}
      {itemSetting(
        "Switch to automatic light mode",
        path.isLightOn,
        "isAutoLight"
      )}
      <Button title="Defaut settings" onPress={defaultSettings} />
    </React.Fragment>
  );
}

function itemSetting(nameItem, path, field) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 0.1,
        flexDirection: "row-reverse",
        borderBottomColor: "gray",
        borderWidth: 1,
        margin: 10,
      }}
    >
      <View
        style={{ flex: 1, justifyContent: "center", backgroundColor: "#fff" }}
      >
        {sw(path, field)}
      </View>
      <Text
        style={{
          marginLeft: 10,
          textAlign: "left",
          alignSelf: "center",
          flex: 2,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {nameItem}
      </Text>
    </View>
  );
}

export default OtherSettingsStackScreen;
