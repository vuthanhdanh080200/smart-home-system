import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { updateData, addData, getCollection } from "../api/firebaseApi";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import LinePlot from "./component/linePlot";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ReportDayStackScreen from "./reportDayScreen";
import ReportMonthStackScreen from "./reportMonthScreen";

const Drawer = createDrawerNavigator();

function ReportStackScreen(props) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "cyan",
        },
      }}
      initialRouteName="report"
    >
      <Drawer.Screen
        name="reportDay"
        component={ReportDayStackScreen}
        options={{ title: "Report Day" }}
        navigation={props}
      />
      {/* <Drawer.Screen
        name="reportMonth"
        component={ReportMonthStackScreen}
        options={{
          title: "Report Month",
        }}
        navigation={props}
      /> */}
    </Drawer.Navigator>
  );
}

export default ReportStackScreen;
