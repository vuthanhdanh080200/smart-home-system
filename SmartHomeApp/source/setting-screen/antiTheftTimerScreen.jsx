import React, { useState, useEffect, Component } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getCollection, addData, sw } from "../api/firebaseApi";
import Images from "../config/images";
import ListItems from "./component/listItems";
import toggleDrawer from "./component/toggleDrawer";

const Stack = createStackNavigator();

function antiTheftTimerStackScreen(props) {
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
        <Stack.Screen
          name="Anti theft timer"
          component={AntiTheftTimerScreen}
          navigation={props}
        />
      </Stack.Navigator>
      {toggleDrawer(props)}
    </React.Fragment>
  );
}

function AntiTheftTimerScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ListItems path="Danh/antiTheftTimer" />
      </ScrollView>

      {AddTime()}
    </View>
  );
}

const add = () => {
  let begin = new Date();
  begin.setHours(begin.getHours() + 1);
  let end = new Date();
  end.setHours(end.getHours() + 12);
  console.log(begin.toString() > end.toString());
  let data = {
    isEnabled: false,
    begin: begin.toString(),
    end: end.toString(),
  };
  let path = "Danh/antiTheftTimer/";
  addData(path, data);
};

const AddTime = () => {
  let imageXml = (
    <Image
      source={Images.addButton}
      style={{
        resizeMode: "contain",
        alignSelf: "center",
        height: 50,
        width: 50,
      }}
    />
  );
  return <TouchableOpacity onPress={add}>{imageXml}</TouchableOpacity>;
};

export default antiTheftTimerStackScreen;
