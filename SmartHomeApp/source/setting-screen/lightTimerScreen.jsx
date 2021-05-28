import React, { useState } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from "./styles";

function HeaderBar() {
  return (
    <View style={Styles.headerBarInSettings}>
      <Text style={Styles.textHeaderBarInSettings}>Light Timer</Text>
    </View>
  );
}

const LightTimerScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      {HeaderBar()}
      {Item()}
      {AddTime()}
    </View>
  );
};

const Item = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatePicker = () => {
    showMode("date");
  };

  const dateTimeItem = (time, date) => {
    return (
      <View
        style={{
          flex: 1,
          alignSelf: "center",
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            alignSelf: "flex-start",
            flex: 0.5,
            fontWeight: "bold",
            fontSize: 30,
            marginLeft: 15,
          }}
        >
          {time}
        </Text>
        <Text
          style={{
            alignSelf: "flex-start",
            flex: 0.25,
            fontWeight: "bold",
            fontSize: 15,
            marginLeft: 20,
          }}
        >
          {date}
        </Text>
      </View>
    );
  };
  let dateTimePicker = (
    <View style={{ flex: 1, flexDirection: "column-reverse" }}>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );

  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  let sw = (
    <Switch
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
  return (
    <View
      style={{
        flex: 2,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          flex: 0.25,
          flexDirection: "row-reverse",
          borderLeftColor: "#fff",
          borderRightColor: "#fff",
          borderTopColor: "#fff",
          borderBottomColor: "gray",
          borderWidth: 3,
          margin: 10,
        }}
        onPress={showDatePicker}
      >
        {sw}
        {dateTimeItem("5:30", "Today")}
        <View style={{ flex: 0.25, justifyContent: "center" }}>
          <Text style={{ fontSize: 50, marginBottom: 20 }}>-</Text>
        </View>
        {dateTimeItem("11:30", "Today")}
      </TouchableOpacity>
      {dateTimePicker}
    </View>
  );
};

const AddTime = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={{ flex: 1, flexDirection: "column-reverse", flexShrink: 1 }}>
      <View
        style={{
          flex: 0.5,
          justifyContent: "center",
        }}
      >
        <Button onPress={showTimepicker} title="ADD" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
export default LightTimerScreen;
