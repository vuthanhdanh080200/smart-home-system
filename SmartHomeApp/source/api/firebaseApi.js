import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox, SnapshotViewIOS } from "react-native";
import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Button,
  Switch,
} from "react-native";
import { firebaseConfig } from "../config/firebase";
import { City, cityConverter } from "../model/City";
import { System, systemConverter } from "../model/System";

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const db = firebase.firestore();

const addSystem = (key, system) => {
  let systemsRef = db.collection("systems");
  systemsRef.doc(key).withConverter(systemConverter).set(system);
};

const addData = (path, data) => {
  path = "systems/" + path;
  let systemsRef = db.doc(path).set(data);
};

const getDataOnChange = (path, field, func) => {
  path = "systems/" + path;
  let systemsRef = db.doc(path);

  systemsRef.onSnapshot({}, (doc) => {
    func(doc.data()[field]);
  });
};

const getCollection = (path, func) => {
  path = "systems/" + path;
  let systemsRef = db.collection(path);

  systemsRef.get().then((querySnapshot) => {
    func(querySnapshot);
  });
};

const getCollectionOnChange = (path, func) => {
  path = "systems/" + path;
  let systemsRef = db.collection(path);
  systemsRef.onSnapshot((querySnapshot) => {
    func(querySnapshot);
  });
};

const updateData = (path, data) => {
  path = "systems/" + path;
  let systemsRef = db.doc(path);
  systemsRef.update(data);
};

const sw = (path, field) => {
  path = "systems/" + path;
  let systemsRef = db.doc(path);
  const [isOn, setEnable] = useState(true);

  const toggle = () => {
    systemsRef.update({
      [field]: !isOn,
    });
  };

  systemsRef.onSnapshot({}, (doc) => {
    if (doc.data()[field] == false) {
      setEnable(false);
    } else if (doc.data()[field] == true) {
      setEnable(true);
    }
  });

  let switchSystem = (
    <Switch
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.trackColor}
      onValueChange={toggle}
      value={isOn}
    />
  );

  return <View>{switchSystem}</View>;
};

const addCity = (key, name, state, country) => {
  var citiesRef = db.collection("cities");

  citiesRef
    .doc(key)
    .withConverter(cityConverter)
    .set(new City(name, state, country));
};

const updateCity = (key, name, state, country) => {
  var citiesRef = db.collection("cities");
  citiesRef.doc(key).update({ name: name, state: state, country: country });
};

const deleteCity = (key) => {
  var citiesRef = db.collection("cities");
  citiesRef
    .doc(key)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

const listenChange = () => {
  db.collection("cities")
    .doc("SF")
    .onSnapshot((doc) => {
      console.log("Current data: ", doc.data());
    });
};

const onPress = () => {
  var citiesRef = db.collection("cities");

  citiesRef.doc("SF").set({
    name: "San Francisco",
    state: "CA",
    country: "USA",
    capital: false,
    population: 860000,
    regions: ["west_coast", "norcal"],
  });
  citiesRef.doc("LA").set({
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    capital: false,
    population: 3900000,
    regions: ["west_coast", "socal"],
  });
  citiesRef.doc("DC").set({
    name: "Washington, D.C.",
    state: null,
    country: "USA",
    capital: true,
    population: 680000,
    regions: ["east_coast"],
  });
  citiesRef.doc("TOK").set({
    name: "Tokyo",
    state: null,
    country: "Japan",
    capital: true,
    population: 9000000,
    regions: ["kanto", "honshu"],
  });
  citiesRef.doc("BJ").set({
    name: "Beijing",
    state: null,
    country: "China",
    capital: true,
    population: 21500000,
    regions: ["jingjinji", "hebei"],
  });
};

const onPress1 = () => {
  var docRef = db.collection("cities").doc("SF");

  docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
};

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};

export {
  onPress,
  onPress1,
  addCity,
  updateCity,
  deleteCity,
  listenChange,
  addSystem,
  addData,
  getCollection,
  getCollectionOnChange,
  getDataOnChange,
  db,
  sw,
  updateData,
};
