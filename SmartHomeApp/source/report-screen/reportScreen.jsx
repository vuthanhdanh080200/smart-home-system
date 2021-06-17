import React, { useState } from "react";
import {Text, View, Image, TouchableOpacity, Dimensions, Switch} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import Images from "../config/images";
import Data from "../database/data";

const ReportStack = createStackNavigator();

function ReportStackScreen() {
    return (
      <ReportStack.Navigator screenOptions = {{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: "cyan",
        }
      }}>
        <ReportStack.Screen
          name = "Report"
          component = {ReportScreen}
          options = {{
            title: 'Report'
          }}/>
      </ReportStack.Navigator>
    );
  }
const ReportScreen = () => {
  return (
    <React.Fragment>
      <Text>Report Screen Code Here</Text>
    </React.Fragment>
  );
};


export default ReportStackScreen;
