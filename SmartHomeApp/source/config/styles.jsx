import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: getStatusBarHeight(),
    height: 50,
    width: 50,
  },
  normal: { flex: 1, justifyContent: "center", alignItems: "center" },
});
