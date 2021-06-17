import React, { useEffect, useState } from "react";
import { Image, Text, View, FlatList, TouchableOpacity  } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import database from '../database/data';
import Style from './styles';
import { render } from "react-dom";

const NotificationStack = createStackNavigator();

function NotificationStackScreen() {
    return (
      <NotificationStack.Navigator screenOptions = {{
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          color: "cyan",
        }
      }}>
        <NotificationStack.Screen
          name = "Notification"
          component = {NotificationScreen}
          options = {{
            title: 'Notification'
          }}/>
      </NotificationStack.Navigator>
    );
}

function item(data){
  // const load = async() => {
  //   const data = await database.load('systems','system');
  //   return data.notifications;
  // }
  // // let notifications = await load();
  // // console.log(notifications);
  // load().then(
  //   function(notifications){
  //     console.log(notifications);
  //     document.getElementById()
  //   }
  // );
  let content = data.content;
  let mark_as_read = data.read;
  let time = data.time.toDate();
  return(
    <View style = {Style.container}>
      <Image style = {Style.icon} source = {require('../assets/notification_item.png')} />
      <View style = {Style.content}>
        <Text> {content} </Text>
        <Text> {time} </Text>
      </View>
    </View>
  );
}

function item_list(){
  let nots = () => {
    database.firestore.collection('systems').doc('system').get().then((snapshot) => {
      let notifications = snapshot.data().notifications;    
      // for (var i=0; i<notifications.length; i++){
      //   nots.push(item(notifications[i]))
      // }
      return (
        <Text>ABC</Text>
      );
    });
  }
  const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
  ];
  
  const Item = ({ item }) => (
    <TouchableOpacity style={Style.item}>
      <Image style = {Style.icon} source = {require('../assets/notification_item.png')}/>
      <View style = {Style.content}>
        <Text style={Style.item_text}>{item.title}</Text>
      </View>      
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    // const color = item.id === selectedId ? 'white' : 'black';
    return(
      <Item
        item = {item}  
        //onPress = {() => setSelectedId(item.id)} 
        // backgroundColor = {{ backgroundColor }} 
        // textColor={{ color }}
      />
    )
  };
  return(
      <View style = {Style.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  console.log(nots)
  return(nots());
}
const NotificationScreen = () => {  
  return (
    <React.Fragment>
      {item_list()}
    </React.Fragment>
  );
};

export default NotificationStackScreen;