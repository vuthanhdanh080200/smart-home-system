import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import Styles from "../config/styles";
import { addSystem, getData } from "../api/firebaseApi";
import { System } from "../model/System";
const SystemScreen = () => {
  let system = new System(false, false);
  let isSystemOn = getData("Danh", "isSystemOn");
  return (
    <View style={Styles.normal}>
      <Button title="Add" onPress={() => addSystem("Danh", system)} />
    </View>
  );
};

export default SystemScreen;
