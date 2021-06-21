import React from "react";
import { View } from "react-native";
import Style from './styles';
import dataProcess from "../dataProcess";
import Item from './item';
import dataUpdate from '../dataUpdate';
import { SwipeListView } from 'react-native-swipe-list-view';
import remove from '../dataDelete';
import HiddenItems from './hidden';

const item_list = () => {
  const data = dataProcess();
    
  const mark_as_read = (rowKey) => {
    dataUpdate(rowKey, {read: true});
  }

  const deleteRow = (rowKey) => {
    remove(rowKey);
  }

  const renderItem = ({ item }) => {
    const backgroundColor = item.read === false? '#e1dad9' : "#fff"
    return(
      <Item
        item = {item}
        backgroundColor = {{backgroundColor}}
      />
    )
  };  
    
  const renderHiddenItem = ({ item }) => {
    return(
      <HiddenItems
        item = {item}
        onPress_delete = {() => deleteRow(item.key)}
        onPress_mark_as_read = {() => mark_as_read(item.key)}
      />
    )};  

  return(
    <View style = {Style.list}>
      <SwipeListView
        data={data}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem} 
        rightOpenValue={-150}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export default item_list;