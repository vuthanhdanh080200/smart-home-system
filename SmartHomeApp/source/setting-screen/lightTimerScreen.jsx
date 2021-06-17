import React, { useState } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from "./styles";
import Sw from "../components/switchButton";
import Data from "../database/data";
import Images from "../config/images";

function HeaderBar() {
  return (
    <View style={Styles.headerBarInSettings}>
      <Text style={Styles.textHeaderBarInSettings}>Light Timer</Text>
    </View>
  );
}

const LightTimerScreen = (props) => {
  return (
    <View style={{ flex: 1 }}>
      {HeaderBar()}
      {Item()}
      {AddTime()}
    </View>
  );
};

const dateTimeItem = () => {
  const [date, setDate] = useState(new Date());
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

  let yyyy_mm_dd = date.toLocaleDateString();
  let hh_mm = date.toLocaleTimeString().substr(0, 5);

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
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
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

const Item = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  let sw = (
    <Switch
      style={{ marginTop: "20%" }}
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
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

      {dateTimeItem()}
      <Image
        source={Images.line}
        style={{
          alignSelf: "center",
          height: "50%",
          width: "20%",
        }}
      />
      {dateTimeItem()}
    </View>
  );
};

const AddTime = () => {
  const [date, setDate] = useState(new Date());
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

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
export default LightTimerScreen;
