import { StyleSheet, StatusBar } from "react-native";
import Constants from 'expo-constants';

export default StyleSheet.create({
  logo: {
    marginTop: Constants.statusBarHeight,
    alignSelf: "flex-end",
    position: "absolute",
    height: 60,
    width: 60,
  },
});
