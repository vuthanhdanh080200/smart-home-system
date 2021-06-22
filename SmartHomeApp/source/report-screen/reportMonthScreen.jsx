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
import { Picker } from "@react-native-picker/picker";

const fakeData = [
  {
    begin: new Date("2021-03-21T01:00:00"),
    end: new Date("2021-03-21T01:15:00"),
  },
  {
    begin: new Date("2021-03-21T01:30:00"),
    end: new Date("2021-03-21T02:00:00"),
  },
  {
    begin: new Date("2021-03-21T02:30:00"),
    end: new Date("2021-03-21T03:00:00"),
  },
  {
    begin: new Date("2021-04-21T05:30:00"),
    end: new Date("2021-04-21T08:00:00"),
  },
  {
    begin: new Date("2021-05-21T20:30:00"),
    end: new Date("2021-05-24T22:30:00"),
  },
  {
    begin: new Date("2021-07-21T23:30:00"),
    end: new Date("2021-07-23T01:30:00"),
  },
  {
    begin: new Date("2021-07-22T01:50:00"),
    end: new Date("2021-07-22T02:00:00"),
  },
  {
    begin: new Date("2021-07-22T02:30:00"),
    end: new Date("2021-07-22T03:00:00"),
  },
  {
    begin: new Date("2021-10-22T05:30:00"),
    end: new Date("2021-10-22T08:00:00"),
  },
  {
    begin: new Date("2021-10-22T20:30:00"),
    end: new Date("2021-10-22T22:30:00"),
  },
];

const Stack = createStackNavigator();
function ReportMonthStackScreen(props) {
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
        <Stack.Screen name="Report Month" component={ReportMonthScreen} />
      </Stack.Navigator>
      {toggleDrawer(props)}
    </React.Fragment>
  );
}

const ReportMonthScreen = () => {
  const [month, setMonth] = useState(0);
  let picker = (
    <Picker
      selectedValue={setMonth}
      onValueChange={(itemValue, itemIndex) => {
        setMonth(itemValue);
        setShow(false);
      }}
      style={{
        flex: 1,
        borderWidth: 1,
        padding: 10,
      }}
    >
      <Picker.Item label="January" value={0} />
      <Picker.Item label="February" value={1} />
      <Picker.Item label="March" value={2} />
      <Picker.Item label="April" value={3} />
      <Picker.Item label="May" value={4} />
      <Picker.Item label="June" value={5} />
      <Picker.Item label="July" value={6} />
      <Picker.Item label="August" value={7} />
      <Picker.Item label="September" value={8} />
      <Picker.Item label="October" value={9} />
      <Picker.Item label="November" value={10} />
      <Picker.Item label="December" value={11} />
    </Picker>
  );
  const [data, setData] = useState([]);
  const [sum, setSum] = useState(0);
  const [show, setShow] = useState(false);
  const [labels, setLabels] = useState([]);
  const submit = () => {
    const now = new Date();
    const temp = new Date(now.getFullYear(), month, 1);
    const daysInMonth = new Date(now.getFullYear(), month, 0).getDate();
    console.log(daysInMonth);
    let l = [];
    let t = [];
    for (let i = 1; i < daysInMonth; i++) {
      l.push(i);
      t.push(0);
    }
    setData(t);
    setLabels(l);
    getCollection(path.reports, (querySnapshot) => {
      let t = [];
      querySnapshot.forEach((doc) => {
        t.push(doc.data());
      });
      for (let i = 0; i < daysInMonth; i++) {
        let b = temp.getTime() / 1000 + i * 24 * 60 * 60;
        let e = b + 24 * 60 * 60;
        console.log(new Date(b * 1000));
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
  };

  return (
    <ScrollView style={{ backgroundColor: "snow" }}>
      <View
        style={{
          flex: 1,
          borderWidth: 1,
          padding: 10,
        }}
      >
        {picker}
      </View>
      {/* <Button
        title="add"
        onPress={() => fakeData.map((i) => addData("reports", i))}
      /> */}
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

export default ReportMonthStackScreen;
