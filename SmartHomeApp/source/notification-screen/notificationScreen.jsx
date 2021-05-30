import React, { useEffect } from "react";
import { Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import MQTTConnection from "../mqtt/MQTTConnection";
import { Buffer } from 'buffer';

global.Buffer = Buffer;
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

const NotificationScreen = () => {
  useEffect(() => {
    this.mqttConnect = new MQTTConnection()
    this.mqttConnect.onMQTTConnect = this.onMQTTConnect
    this.mqttConnect.onMQTTLost = this.onMQTTLost
    this.mqttConnect.onMQTTMessageArrived = this.onMQTTMessageArrived
    this.mqttConnect.onMQTTMessageDelivered = this.onMQTTMessageDelivered
    
    this.mqttConnect.connect('broker.mqttdashboard.com', 8000)

    onMQTTConnect = () => {
      console.log('App onMQTT Connected!')
      this.mqttConnect.subscribeChannel('SIHS')
    }

    onMQTTLost = () => {
      console.log('App onMQTT Lost')
    }

    onMQTTMessageArrived = (message) => {
      console.log('App onMQTTMessageArrive: ' + message.payloadString)
    }

    onMQTTMessageDelivered = (message) => {
      console.log('App onMQTTMessageDelivered: ' + message.payloadString);
    }

    return() => {
      this.mqttConnect.close()
    }

  }, [])
  
  return (
    <React.Fragment>
      <Button title = "Press" onPress = {() => this.mqttConnect.send('SIHS', "This is a message!")}/>
    </React.Fragment>
  );
};


export default NotificationStackScreen;
