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
      path: props.path,
    };
  }

  componentDidMount() {
    getCollectionOnChange(this.state.path, (querySnapshot) => {
      var data = [];
      querySnapshot.forEach((doc) => {
        let temp = doc.data();
        temp["id"] = doc.id;
        data.push(temp);
      });
      this.setState({ items: data });
    });
    console.log(this.state);
  }

  render() {
    return (
      <React.Fragment>
        {this.state.items.map((props) => {
          return (
            <Item
              id={props.id}
              isEnabled={props.isEnabled}
              begin={props.begin}
              end={props.end}
              key={props.id}
              path={this.state.path}
            />
          );
        })}
      </React.Fragment>
    );
  }
}
