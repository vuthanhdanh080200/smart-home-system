import React, { useState } from "react";
import { Text, View, Switch, Button } from "react-native";
import Data from "../database/data";

function LightTimerScreen() {
  return <React.Fragment></React.Fragment>;
}

function item(isOn, nameItem) {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  let sw = (
    <Switch
      trackColor={{ false: "#767577", true: "aqua" }}
      thumbColor={"#fff"}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );

  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 0.1,
        flexDirection: "row-reverse",
        borderBottomColor: "gray",
        borderWidth: 1,
        margin: 10,
      }}
    >
      {sw}
      <Text
        style={{
          textAlign: "left",
          alignSelf: "center",
          flex: 0.95,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        {nameItem}
      </Text>
    </View>
  );
}

export default LightTimerScreen;
