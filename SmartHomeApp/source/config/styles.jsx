import { StyleSheet, StatusBar } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: 3,
    height: 50,
    width: 50,
  },
  normal: { flex: 1, justifyContent: "center", alignItems: "center" },
});
