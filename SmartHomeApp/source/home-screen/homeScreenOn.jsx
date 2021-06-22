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
import { sw, imgSw, updateData, getDataOnChange } from "../api/firebaseApi";
import path from "../config/path";
export default class HomeScreenOn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightOn: false,
      isSystemOn: false,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted &&
      getDataOnChange(path.isSystemOn, (data) => {
        this._isMounted &&
          this.setState({
            isLightOn: data.isLightOn,
            isSystemOn: data.isSystemOn,
          });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle = (field) => {
    updateData(path.isSystemOn, { [field]: !this.state[field] });
    // this.setState({ [field]: !this.state[field] });
  };

  render() {
    let switchSystem = (
      <Switch
        trackColor={SwitchStyles.trackColor}
        thumbColor={SwitchStyles.trackColor}
        onValueChange={() => this.toggle("isSystemOn")}
        value={this.state.isSystemOn}
      />
    );
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
        {switchSystem}
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

    let modeScreen =
      this.state.isLightOn === true ? LightScreen() : AntiTheftScreen();
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
