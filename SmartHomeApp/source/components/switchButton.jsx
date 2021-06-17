import React, { useState } from "react";
import { Switch } from "react-native";

export default (isEnabled, toggleSwitch) => {
  return (
    <Switch
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
