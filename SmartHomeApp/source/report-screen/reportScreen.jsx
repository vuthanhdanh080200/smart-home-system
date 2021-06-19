import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { addCity, sw } from "../api/firebaseApi";

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
  return <React.Fragment></React.Fragment>;
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
