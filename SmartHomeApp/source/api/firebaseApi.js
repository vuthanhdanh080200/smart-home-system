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
  let systemsRef = db.collection(path).doc();
  systemsRef.set(data);
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

const deleteData = (path) => {
  path = "systems/" + path;
  let systemRef = db.doc(path);
  systemRef
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
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

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};

export {
  addSystem,
  addData,
  getCollection,
  getCollectionOnChange,
  getDataOnChange,
  db,
  sw,
  updateData,
  deleteData,
};
