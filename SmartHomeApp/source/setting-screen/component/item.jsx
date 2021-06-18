import React, { useState, useEffect, Component } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
} from "react-native";
import { getCollection, addData, sw } from "../../api/firebaseApi";
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from "../styles";
import Images from "../../config/images";

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      isEnabled: props.isEnabled,
      date: new Date(props.date),
      mode: props.mode,
      show: props.show,
    };
  }

  setDate = (currentDate) => {
    this.setState({ date: currentDate });
  };

  setMode = (currentMode) => {
    this.setState({ mode: currentMode });
  };

  setShow = (currentShow) => {
    this.setState({ show: currentShow });
  };

  toggleSwitch = () => {
    this.setState({ isEnabled: !this.isEnabled });
  };

  render() {
    let sw = (
      <Switch
        style={{ marginTop: "20%" }}
        trackColor={SwitchStyles.trackColor}
        thumbColor={SwitchStyles.thumbColor}
        onValueChange={this.toggleSwitch}
        value={this.state.isEnabled}
      />
    );

    let img = (
      <Image
        source={Images.dustBin}
        style={{
          alignSelf: "center",
          marginTop: "5%",
          marginLeft: "50%",
          height: "50%",
          width: "30%",
        }}
      />
    );
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setShow(Platform.OS === "ios");
      this.setDate(currentDate);
    };

    const showMode = (currentMode) => {
      this.setShow(true);
      this.setMode(currentMode);
    };

    const showDatepicker = () => {
      showMode("date");
    };

    const showTimepicker = () => {
      showMode("time");
    };
    console.log(this.state.date);
    let yyyy_mm_dd = this.state.date.toLocaleDateString();
    let hh_mm = this.state.date.toLocaleTimeString().substr(0, 5);

    const dateTimeItem = (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <TouchableOpacity
          style={Styles.touchableOpacity}
          onPress={showTimepicker}
        >
          <Text style={Styles.textTimeItem}>{hh_mm}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.touchableOpacity}
          onPress={showDatepicker}
        >
          <Text style={Styles.dateTimeItem}>{yyyy_mm_dd}</Text>
        </TouchableOpacity>
        {this.state.show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={this.state.date}
            mode={this.state.mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
    );
    return (
      <View
        key={this.id}
        style={{
          backgroundColor: "#fff",
          flex: 0.2,
          flexDirection: "row-reverse",
          borderLeftColor: "#fff",
          borderRightColor: "#fff",
          borderTopColor: "#fff",
          borderBottomColor: "gray",
          borderWidth: 3,
          margin: 10,
        }}
      >
        <View
          style={{
            flex: 0.5,
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {sw}
          <TouchableOpacity
            onPress={() => {
              console.log("HAHA");
            }}
          >
            {img}
          </TouchableOpacity>
        </View>

        {dateTimeItem}
        <Image
          source={Images.line}
          style={{
            alignSelf: "center",
            height: "50%",
            width: "20%",
          }}
        />
        {dateTimeItem}
      </View>
    );
  }
}

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
