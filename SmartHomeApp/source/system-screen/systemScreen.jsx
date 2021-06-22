import React from "react";
import { Text, View, StatusBar, Button } from "react-native";
import Styles from "../config/styles";

const SystemScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", margin: 10 }}>
      <View style={{ flex: 0.5, margin: 50 }}>
        <Text
          style={{ fontSize: 40, fontWeight: "bold", color: "cornflowerblue" }}
        >
          ABOUT US
        </Text>
        <Text style={{ fontStyle: "italic", color: "darkgray" }}>
          This is a demo app for the project{" "}
        </Text>
        <Text style={{ color: "coral", fontSize: 20 }}>
          Smart Home IoT Systems.{" "}
        </Text>
        <Text style={{ fontStyle: "italic", color: "darkgray" }}>
          Developed by
        </Text>
        <Text style={{ color: "firebrick", fontSize: 20 }}>
          {" "}
          SIU NHAN DO AN{" "}
        </Text>
        <Text style={{ fontStyle: "italic", color: "darkgray" }}>
          Contact us
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "orange",
            fontStyle: "italic",
          }}
        >
          1813636 - Doan Toi
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "cornflowerblue",
            fontStyle: "italic",
          }}
        >
          1812164 - Le Hiu
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "orange",
            fontStyle: "italic",
          }}
        >
          1811669 - Vu Danh
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "cornflowerblue",
            fontStyle: "italic",
          }}
        >
          1811446 - Ngo Chin
        </Text>
      </View>
    </View>
  );
};

export default SystemScreen;
