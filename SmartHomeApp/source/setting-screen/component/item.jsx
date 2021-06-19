import React, { useState, useEffect, Component } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
  Alert,
} from "react-native";
import { deleteData, updateData } from "../../api/firebaseApi";
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from "../styles";
import Images from "../../config/images";

class DateTimeItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      isBegin: props.isBegin,
      date: new Date(props.date),
      otherDate: new Date(props.otherDate),
      mode: "date",
      show: false,
      path: props.path,
    };
  }

  setDate = (currentDate) => {
    let now = new Date();
    let path = this.state.path + "/" + this.state.id;
    console.log(path);
    if (this.state.isBegin) {
      if (
        now.getTime() < currentDate.getTime() &&
        currentDate.getTime() < this.state.otherDate.getTime()
      ) {
        updateData(path, { begin: currentDate.toString() });
        this.setState({ date: currentDate });
      } else {
        Alert.alert("Your begin date is not valid", "Please set another date", [
          {
            text: "OK",
          },
        ]);
      }
    } else {
      if (
        now.getTime() < currentDate.getTime() &&
        currentDate.getTime() > this.state.otherDate.getTime()
      ) {
        updateData(path, { end: currentDate.toString() });
        this.setState({ date: currentDate });
      } else {
        Alert.alert("Your end date is not valid", "Please set another date", [
          {
            text: "OK",
          },
        ]);
      }
    }
  };

  setMode = (currentMode) => {
    this.setState({ mode: currentMode });
  };

  setShow = (currentShow) => {
    this.setState({ show: currentShow });
  };

  render() {
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
    let yyyy_mm_dd = this.state.date.toLocaleDateString();
    let hh_mm = this.state.date.toLocaleTimeString().substr(0, 5);

    return (
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
  }
}

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      isEnabled: props.isEnabled,
      begin: props.begin,
      end: props.end,
      path: props.path,
    };
  }

  deleteItem = () => {
    let path = this.state.path + "/" + this.state.id;
    deleteData(path);
  };

  toggleSwitch = () => {
    let path = this.state.path + "/" + this.state.id;
    updateData(path, { isEnabled: !this.state.isEnabled });
    if (this.state.begin < this.state.end) {
      this.setState({ isEnabled: !this.state.isEnabled });
    }
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
          <TouchableOpacity onPress={this.deleteItem}>{img}</TouchableOpacity>
        </View>

        <DateTimeItem
          date={this.state.end}
          otherDate={this.state.begin}
          isBegin={false}
          id={this.state.id}
          path={this.state.path}
        />
        <Image
          source={Images.line}
          style={{
            alignSelf: "center",
            height: "50%",
            width: "20%",
          }}
        />
        <DateTimeItem
          date={this.state.begin}
          otherDate={this.state.end}
          isBegin={true}
          id={this.state.id}
          path={this.state.path}
        />
      </View>
    );
  }
}

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
