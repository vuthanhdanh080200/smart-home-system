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
import { getCollection, getCollectionOnChange } from "../../api/firebaseApi";
import Item from "./item";

export default class listItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    getCollectionOnChange("Danh/lightTimer", (querySnapshot) => {
      var data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      this.setState({ items: data });
    });
    console.log(this.state);
  }

  componentWillUnmount() {
    this.setState({ items: [] });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((props) => {
          return (
            <Item
              id={props.id}
              isEnabled={props.isEnabled}
              date={props.date}
              mode={props.mode}
              show={props.show}
              key={props.id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
