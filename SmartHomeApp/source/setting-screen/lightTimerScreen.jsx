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
import DateTimePicker from "@react-native-community/datetimepicker";
import Styles from "./styles";
import Sw from "../components/switchButton";
import Data from "../database/data";
import Images from "../config/images";
import { createStackNavigator } from "@react-navigation/stack";
import { getCollection, addData } from "../api/firebaseApi";

const Stack = createStackNavigator();
function LightTimerStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
          color: "cyan",
        },
      }}
    >
      <Stack.Screen name="Light timer" component={LightTimerScreen} />
    </Stack.Navigator>
  );
}

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [{ id: 1 }] };
  }
  // componentDidMount() {
  //   getCollection("Danh/lightTimer", (querySnapshot) => {
  //     var data = [];
  //     querySnapshot.forEach((doc) => {
  //       data.push(doc.data());
  //     });
  //     this.setState({ items: data });
  //   });
  // }

  render() {
    console.log(this.state.items);
    return (
      <React.Fragment>
        {this.state.items.map((i) => {
          Item(i);
        })}
      </React.Fragment>
    );
  }
}

const LightTimerScreen = () => {
  [state, setState] = useState({ items: [{ id: 3 }, { id: 5 }, { id: 6 }] });
  useEffect(() => {
    getCollection("Danh/lightTimer", (querySnapshot) => {
      var data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setState({ items: data });
    });
  });
  let items = state.items.map((item) => Item(item));
  return (
    <View style={{ flex: 1 }}>
      {items}
      {AddTime()}
    </View>
  );
};

const dateTimeItem = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  let yyyy_mm_dd = date.toLocaleDateString();
  let hh_mm = date.toLocaleTimeString().substr(0, 5);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        style={Styles.touchableOpacity}
        onPress={showTimepicker}
      >
        <Text style={Styles.textTimeItem}>{hh_mm}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={Styles.touchableOpacity}
        onPress={showDatepicker}
      >
        <Text style={Styles.dateTimeItem}>{yyyy_mm_dd}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const Item = (item) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };
  let sw = (
    <Switch
      style={{ marginTop: "20%" }}
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.thumbColor}
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
  let img = (
    <Image
      source={Images.dustBin}
      style={{
        alignSelf: "center",
        marginTop: "5%",
        marginLeft: "50%",
        height: "50%",
        width: "30%",
      }}
    />
  );
  return (
    <View
      key={item.id}
      style={{
        backgroundColor: "#fff",
        flex: 0.2,
        flexDirection: "row-reverse",
        borderLeftColor: "#fff",
        borderRightColor: "#fff",
        borderTopColor: "#fff",
        borderBottomColor: "gray",
        borderWidth: 3,
        margin: 10,
      }}
    >
      <View
        style={{
          flex: 0.5,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {sw}
        <TouchableOpacity
          onPress={() => {
            console.log("HAHA");
          }}
        >
          {img}
        </TouchableOpacity>
      </View>

      {dateTimeItem()}
      <Image
        source={Images.line}
        style={{
          alignSelf: "center",
          height: "50%",
          width: "20%",
        }}
      />
      {dateTimeItem()}
    </View>
  );
};

const add = (querySnapshot) => {
  var count = 0;
  querySnapshot.forEach((doc) => {
    count = count + 1;
  });
  let data = { id: count };
  let path = "Danh/lightTimer/" + count;
  addData(path, data);
};

const AddTime = () => {
  let path = "Danh/lightTimer";
  return <Button title="Add Timer" onPress={() => getCollection(path, add)} />;
};

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};
export default LightTimerStackScreen;
