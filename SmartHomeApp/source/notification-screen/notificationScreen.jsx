import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import item_list from './components/item_list'

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
  return (
    <React.Fragment>
      {item_list()}
    </React.Fragment>
  );
};

export default NotificationStackScreen;