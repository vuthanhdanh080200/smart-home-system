import React from "react";
import { Image, Text, View, TouchableOpacity  } from "react-native";
import Style from './styles';

const Item = ({ item ,backgroundColor }) => (
  <View style={[Style.item, backgroundColor]}>
    <Image style = {Style.icon} source = {require('../assets/notification_item.png')}/>
    <View style = {Style.content}>
      <Text style={Style.title}>{item.title}</Text>
      <Text style={Style.item_content}>{item.content}</Text>
      <Text style={Style.time}>{item.time}</Text>
    </View>      
  </View>
);

export default Item;