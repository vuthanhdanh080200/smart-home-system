import React, { useState, Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
  ScrollView,
} from "react-native";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { getDataOnChange } from "../../api/firebaseApi";

export default class LinePlot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: props.labels,
      datasets: [
        {
          data: props.data,
          color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // optional
        },
      ],
      legend: [], // optional
    };
    this.path = props.path;
  }

  // componentDidMount() {
  //   getDataOnChange(this.path, (data) => {
  //     this.setState({
  //       labels: data.labels,
  //       datasets: [
  //         {
  //           data: data.datasets,
  //           color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // optional
  //         },
  //       ],
  //       legend: data.legend, // optional
  //     });
  //   });
  // }

  // componentWillUnmount() {
  //   this.setState({
  //     labels: [],
  //     datasets: [
  //       {
  //         data: [10],
  //         color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // optional
  //       },
  //     ],
  //     legend: [], // optional
  //   });
  // }

  render() {
    const chartConfig = {
      backgroundGradientFrom: "snow",
      backgroundGradientTo: "snow",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      fillShadowGradient: "skyblue",
      fillShadowGradientOpacity: 100,
    };

    const screenWidth =
      Dimensions.get("window").width + this.state.labels.length * 20;
    const screenHeight = Dimensions.get("window").height;
    return (
      <ScrollView horizontal={true}>
        <LineChart
          data={this.state}
          width={screenWidth}
          height={screenHeight / 2 - 90}
          chartConfig={chartConfig}
          bezier
          fromZero={true}
          segments={5}
        />
      </ScrollView>
    );
  }
}
