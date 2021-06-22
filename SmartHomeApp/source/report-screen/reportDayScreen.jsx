import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
  ScrollView,
  Alert,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { updateData, addData, getCollection } from "../api/firebaseApi";
import {
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import LinePlot from "./component/linePlot";
import toggleDrawer from "../setting-screen/component/toggleDrawer";
import path from "../config/path";
const fakeData = [
  {
    begin: new Date("2021-06-21T01:00:00"),
    end: new Date("2021-06-21T01:15:00"),
  },
  {
    begin: new Date("2021-06-21T01:30:00"),
    end: new Date("2021-06-21T02:00:00"),
  },
  {
    begin: new Date("2021-06-21T02:30:00"),
    end: new Date("2021-06-21T03:00:00"),
  },
  {
    begin: new Date("2021-06-21T05:30:00"),
    end: new Date("2021-06-21T08:00:00"),
  },
  {
    begin: new Date("2021-06-21T20:30:00"),
    end: new Date("2021-06-21T22:30:00"),
  },
  {
    begin: new Date("2021-06-21T23:30:00"),
    end: new Date("2021-06-22T01:30:00"),
  },
  {
    begin: new Date("2021-06-22T01:50:00"),
    end: new Date("2021-06-22T02:00:00"),
  },
  {
    begin: new Date("2021-06-22T02:30:00"),
    end: new Date("2021-06-22T03:00:00"),
  },
  {
    begin: new Date("2021-06-22T05:30:00"),
    end: new Date("2021-06-22T08:00:00"),
  },
  {
    begin: new Date("2021-06-22T20:30:00"),
    end: new Date("2021-06-22T22:30:00"),
  },
];

const Stack = createStackNavigator();
function ReportDayStackScreen(props) {
  return (
    <React.Fragment>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "cyan",
            marginLeft: 40,
          },
        }}
      >
        <Stack.Screen name="Report Day" component={ReportDayScreen} />
      </Stack.Navigator>
      {toggleDrawer(props)}
    </React.Fragment>
  );
}

const ReportDayScreen = () => {
  const [text, onChangeText] = useState("");
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);
  const submit = () => {
    let tempText = new Date(text + "T00:00:00");
    if (tempText.getTime() === tempText.getTime()) {
      getCollection(path.reports, (querySnapshot) => {
        let t = [];
        querySnapshot.forEach((doc) => {
          t.push(doc.data());
        });
        for (let i = 1; i <= 12; i++) {
          let b = tempText.getTime() / 1000 + i * 2 * 60 * 60;
          let e = b + 120 * 60;

          let s = t.reduce((accumulator, currentValue) => {
            let begin = currentValue.begin.seconds;
            let end = currentValue.end.seconds;
            if (e < begin || end < b) {
              accumulator += 0;
            } else if (b <= begin && end <= e) {
              accumulator += end - begin;
            } else if (begin <= b && e <= end) {
              accumulator += e - b;
            } else if (begin < b && end < e) {
              accumulator += end - b;
            } else if (b < begin && e < end) {
              accumulator += e - begin;
            }
            return accumulator;
          }, 0);
          data[i] = Math.floor(s / 60);
          setData[data];
        }
        setShow(true);
        let s = data.reduce((acc, value) => acc + value);
        setSum(s);
      });
    }
  };

  const labels = [
    "00:00",
    "02:00",
    "04:00",
    "06:00",
    "08:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
    "24:00",
  ];

  return (
    <ScrollView style={{ backgroundColor: "snow" }}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={(text) => {
          onChangeText(text);
          setShow(false);
        }}
        placeholder="Input day to see report"
        value={text}
      />
      <Button title="select" onPress={submit} />
      {show && <LinePlot labels={labels} data={data} />}
      {show && (
        <Text
          style={{
            fontSize: 15,
            textAlign: "center",
            textTransform: "capitalize",
          }}
        >
          Total time using light: {Math.floor(sum / 60)} hours
        </Text>
      )}
    </ScrollView>
  );
};

export default ReportDayStackScreen;
