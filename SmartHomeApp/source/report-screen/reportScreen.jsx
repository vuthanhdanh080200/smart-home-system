import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
  ScrollView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { updateData, addData } from "../api/firebaseApi";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import LinePlot from "./component/linePlot";

const ReportStack = createStackNavigator();

function ReportStackScreen() {
  return (
    <ReportStack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "cyan",
        },
      }}
    >
      <ReportStack.Screen
        name="Report"
        component={ReportScreen}
        options={{
          title: "Report",
        }}
      />
    </ReportStack.Navigator>
  );
}

const ReportScreen = () => {
  let dataMonths = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "July",
      "June",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90, 80],
    legend: ["Rainy Days"], // optional
  };

  let dataHours = {
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
    datasets: [10, 20, 100, 40, 20, 60],
    legend: ["Rainy Days"], // optional
  };

  return (
    <ScrollView style={{ backgroundColor: "snow" }}>
      <View style={{ margin: 10, borderBottomWidth: 1 }}>
        <Text style={{ textAlign: "left" }}>Hours</Text>
      </View>
      <LinePlot path={"day"} />
      <View style={{ margin: 10, borderBottomWidth: 1 }}>
        <Text style={{ textAlign: "left" }}>Months</Text>
      </View>
      <LinePlot path={"month"} />

      {/* <Button title="ADD1" onPress={() => updateData("month", dataMonth)} />
      <Button title="ADD2" onPress={() => updateData("day", dataDay)} /> */}
    </ScrollView>
  );
};

// function ReportScreen({ navigation, route }) {
//   const { Message } = route.params;
//   const onPressHandler = () => {
//     navigation.setParams({ Message: "DANH DEP TRAI" });
//   };
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Button title="TEST" onPress={onPressHandler} />
//       <Text>{route.params.Message}</Text>
//     </View>
//   );
// }

export default ReportStackScreen;
