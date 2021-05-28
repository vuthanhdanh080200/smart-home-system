import { StyleSheet, StatusBar } from "react-native";

export default StyleSheet.create({
  // settings screen
  headerBar: {
    height: 60,
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight,
    borderBottomWidth: 2,
    borderBottomColor: "whitesmoke",
  },
  textHeaderBar: {
    flex: 1,
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    color: "cyan",
    marginLeft: 10,
  },

  // screen in settings screne
  headerBarInSettings: {
    height: 50,
    backgroundColor: "aqua",
    borderRadius: 20,
    position: "relative",
  },
  textHeaderBarInSettings: {
    flex: 1,
    fontSize: 20,
    textAlign: "left",
    textAlignVertical: "center",
    color: "white",
    marginLeft: 40,
  },
});
