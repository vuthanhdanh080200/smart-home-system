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

function item_list(){
  const [DATA, setData] = useState(null);
  // var data;
  useEffect(() => {
    database.firestore.collection('notifications').get().then((snapshot) => {
      var data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data())
      });
      setData({data});
    });
  });
  var data = [];
  if(DATA != null){
    DATA.data.forEach((ele)=>{
      let id = ele.id;
      let title = ele.content.title;

      let time = ele.time.toDate();

      let date = time.getDate().toString();

      const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let month = months[time.getMonth()];

      let year = time.getFullYear().toString();

      let hour = time.getHours().toString();
      let minute = time.getMinutes().toString();
      let second =time.getSeconds().toString();

      let fullTime = month + " " + date + " " + year + " at " + hour + ":" + minute + ":" + second;
      
      let content = ele.content.content;
      data.push({id: id, title: title, content: content, time: fullTime})
    })
  }

  const Item = ({ item }) => (
    <View style={Style.item}>
      <Image style = {Style.icon} source = {require('../assets/notification_item.png')}/>
      <View style = {Style.content}>
        <Text style={Style.title}>{item.title}</Text>
        <Text style={Style.item_content}>{item.content}</Text>
        <Text style={Style.time}>{item.time}</Text>
      </View>      
    </View>
  );

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
const NotificationScreen = () => {  
  return (
    <React.Fragment>
      {item_list()}
    </React.Fragment>
  );
};

export default NotificationStackScreen;