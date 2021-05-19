import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  logo: {
    alignSelf: "flex-end",
    position: "absolute",
    marginTop: StatusBar.currentHeight,
    height: 60,
    width: 60,
  },
});
