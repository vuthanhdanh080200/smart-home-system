import React from "react";
import { Image, Text, View, TouchableOpacity  } from "react-native";
import Style from './styles';

const HiddenItems = ({ item , onPress_delete, onPress_mark_as_read}) => (
  <View style = {Style.hiddenItems}>
    <TouchableOpacity onPress = {onPress_delete} style = {Style.deleteButton}>
      <Image style = {Style.interactiveIcon} source = {require('../assets/DustBin.png')}/>
    </TouchableOpacity>
    <TouchableOpacity onPress = {onPress_mark_as_read} style = {Style.mark_as_readButton}>
      <Image style = {Style.interactiveIcon} source = {require('../assets/penIcon.png')}/>
    </TouchableOpacity>
  </View>
);

export default HiddenItems;