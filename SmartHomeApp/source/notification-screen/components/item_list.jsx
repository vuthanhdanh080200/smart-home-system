import React from "react";
import { View, FlatList, TouchableOpacity  } from "react-native";
import Style from './styles';
import dataProcess from "../dataProcess";
import Item from './item';

const item_list = () => {
    const data = dataProcess();
    const renderItem = ({ item }) => {
      return(
        <Item
          item = {item}
        />
      )
    };  
  
    return(
        <View style = {Style.container}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      );
  }

export default item_list;