import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Switch,
  StatusBar,
} from "react-native";

import Images from "../config/images";
import Data from "../database/data";
import { createStackNavigator } from "@react-navigation/stack";
import { sw, updateData, getDataOnChange } from "../api/firebaseApi";

const Stack = createStackNavigator();

function HomeStackScreen() {
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
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
    </Stack.Navigator>
  );
}
const HomeScreen = () => {
  const [isOn, setEnable] = useState(false);
  getDataOnChange("Danh", (data) => setEnable(data.isSystemOn));
  let homeScreen = isOn === true ? HomeScreenOn() : HomeScreenOff();
  return <React.Fragment>{homeScreen}</React.Fragment>;
};

function HomeScreenOff() {
  const [isOn, setEnable] = useState(false);
  const imageSize = Dimensions.get("window").width * 0.4;
  let data = { isSystemOn: true };
  let imageXml = (
    <Image
      source={Images.powerButtonOff}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
        marginBottom: "10%",
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => updateData("Danh", data)}
        style={{ margin: 20 }}
      >
        {imageXml}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 40,
        }}
      >
        System is OFF
      </Text>
      <View
        style={{
          backgroundColor: "lightcyan",
          flex: 0.1,
          flexDirection: "row-reverse",
          borderColor: "black",
          borderRadius: 10,
          borderWidth: 1,
          margin: 20,
        }}
      >
        {sw("Danh", "isLedOn")}
        <Text
          style={{
            textAlign: "left",
            alignSelf: "center",
            flex: 0.95,
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 10,
          }}
        >
          Turn Led
        </Text>
      </View>
    </View>
  );
}

function HomeScreenOn() {
  let onSwitchBar = (
    <View
      style={{
        backgroundColor: "lightcyan",
        flex: 0.06,
        flexDirection: "row-reverse",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      {sw("Danh", "isSystemOn")}
      <Text
        style={{
          textAlign: "left",
          alignSelf: "center",
          flex: 0.95,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        On
      </Text>
    </View>
  );

  const [isOn, setEnable] = useState(false);
  getDataOnChange("Danh", (data) => setEnable(data.isLightOn));
  let modeScreen = isOn === true ? LightScreen() : AntiTheftScreen();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {onSwitchBar}
      {modeScreen}
    </View>
  );
}

function LightScreen() {
  const imageSize = Dimensions.get("window").width;
  let imageXml = (
    <Image
      source={Images.fakeChart}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Smart lighting is ON
      </Text>
      {imageXml}
    </View>
  );
}

function AntiTheftScreen() {
  const imageSize = Dimensions.get("window").width;
  let imageXml = (
    <Image
      source={Images.shield}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
        marginBottom: "10%",
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
        }}
      >
        Anti theft is ON
      </Text>
      {imageXml}
    </View>
  );
}

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};

export default HomeStackScreen;
