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

export default class HomeScreenOff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSystemOn: false,
      isLedOn: false,
    };
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted &&
      getDataOnChange(path.isLedOn, (data) => {
        this._isMounted &&
          this.setState({
            isLedOn: data.isLedOn,
          });
      });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  toggle = (path, field) => {
    updateData(path, { [field]: !this.state[field] });
    //this.setState({ [field]: !this.state[field] });
  };

  render() {
    let switchSystem = (
      <Switch
        trackColor={SwitchStyles.trackColor}
        thumbColor={SwitchStyles.trackColor}
        onValueChange={() => this.toggle(path.isLedOn, "isLedOn")}
        value={this.state.isLedOn}
      />
    );

    const imageSize = Dimensions.get("window").width * 0.4;

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

    let imgSwitch = (
      <TouchableOpacity
        onPress={() => this.toggle(path.isSystemOn, "isSystemOn")}
        style={{ margin: 20 }}
      >
        {imageXml}
      </TouchableOpacity>
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
        {imgSwitch}
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
          {switchSystem}
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
}

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
