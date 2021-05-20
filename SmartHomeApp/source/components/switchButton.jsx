import React, { useState } from "react";
import { Switch } from "react-native";

export default () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  return (
    <Switch
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
