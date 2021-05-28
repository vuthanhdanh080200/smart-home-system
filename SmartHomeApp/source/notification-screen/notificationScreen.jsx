import React, { useState } from "react";
import {Text, View, Image, TouchableOpacity, Dimensions, Switch} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Images from "../config/images";
import Data from "../database/data";

const NotificationStack = createStackNavigator();

function NotificationStackScreen() {
    return (
      <NotificationStack.Navigator screenOptions = {{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: "cyan",
        }
      }}>
        <NotificationStack.Screen
          name = "Notification"
          component = {NotificationScreen}
          options = {{
            title: 'Notification'
          }}/>
      </NotificationStack.Navigator>
    );
  }
const NotificationScreen = () => {
  return (
    <React.Fragment>
      <Text>Notification Screen Code Here</Text>
    </React.Fragment>
  );
};


export default NotificationStackScreen;
