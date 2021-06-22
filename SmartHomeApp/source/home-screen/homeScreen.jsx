import React, { useState, useEffect, Component } from "react";
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
import {
  sw,
  imgSw,
  updateData,
  getDataOnChange,
  getData,
} from "../api/firebaseApi";
import HomeScreenOn from "./homeScreenOn";
import HomeScreenOff from "./homeScreenOff";
import path from "../config/path";

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

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSystemOn: null,
    };
  }

  componentDidMount() {
    getDataOnChange(path.isSystemOn, (data) => {
      this.setState({
        isSystemOn: data.isSystemOn,
      });
    });
  }
  render() {
    let homeScreen =
      this.state.isSystemOn === true ? <HomeScreenOn /> : <HomeScreenOff />;
    return <React.Fragment>{homeScreen}</React.Fragment>;
  }
}

// const HomeScreen = () => {
//   const [isSystemOn, setEnableSystem] = useState(true);
//   // getData("Danh", (data) => {
//   //   if (data.isSystemOn != isSystemOn) {
//   //     setEnableSystem(data.isSystemOn);
//   //   }
//   // });
//   const [isLightOn, setEnableLight] = useState(true);
//   // getDataOnChange("Danh", (data) => {
//   //   if (data.isLightOn != isLightOn) {
//   //     setEnableLight(data.isLightOn);
//   //   }
//   // });

//   let homeScreen =
//     isSystemOn === false ? homeScreenOn(isLightOn) : homeScreenOff();
//   return <React.Fragment>{homeScreen}</React.Fragment>;
// };

export default HomeStackScreen;
