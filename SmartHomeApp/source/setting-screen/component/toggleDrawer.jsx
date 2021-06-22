import React, { useState, useEffect, Component } from "react";
import {
  View,
  Button,
  Platform,
  TouchableOpacity,
  Switch,
  Text,
  Image,
} from "react-native";
import { getCollection, getCollectionOnChange } from "../../api/firebaseApi";
import Images from "../../config/images";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default toggleDrawer = ({ navigation }) => {
  let imageXml = (
    <Image
      source={Images.toggleButton}
      style={{
        resizeMode: "contain",
        height: 50,
        width: 50,
      }}
    />
  );
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.toggleDrawer();
      }}
      style={{
        top: getStatusBarHeight() + 4,
        zIndex: 10,
        position: "absolute",
      }}
    >
      {imageXml}
    </TouchableOpacity>
  );
};
