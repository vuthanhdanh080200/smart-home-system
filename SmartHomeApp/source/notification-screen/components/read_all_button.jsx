import React from "react";
import { View, Button, Alert } from "react-native";
import Style from './styles';
import dataProcess from "../dataProcess";
import dataUpdate from '../dataUpdate';

const mark_button = () => {
    const data = dataProcess();
    const interact = () => {
        Alert.alert(
            "Mark As Read All",
            "",
            [
                {
                    text: "Cancel",
                    // onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => {mark()} }
            ]
        );
    }
    const mark = () => {
        for(let i = 0; i < data.length; i++){
            dataUpdate(data[i].key, {read: true});
        }
    }
    return(
        <View style = {Style.mark_button}>
            <Button
                title = 'Mark as read all'
                onPress = {interact}
            />
        </View>
    )
}
export default mark_button;