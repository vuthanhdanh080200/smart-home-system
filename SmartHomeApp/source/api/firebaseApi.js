import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox, SnapshotViewIOS } from "react-native";
import React, { useState, useEffect } from "react";
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
import Images from "../config/images";

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);

const db = firebase.firestore();

const addData = (path, data) => {
  let systemsRef = db.collection(path).doc();
  systemsRef.set(data);
};

const getData = (path, func) => {
  let systemsRef = db.doc(path);
  systemsRef.get().then((doc) => {
    func(doc.data());
  });
};

const getDataOnChange = (path, func) => {
  let systemsRef = db.doc(path);
  systemsRef.onSnapshot({}, (doc) => {
    func(doc.data());
  });
};

const getCollection = (path, func) => {
  let systemsRef = db.collection(path);

  systemsRef.get().then((querySnapshot) => {
    func(querySnapshot);
  });
};

const getCollectionOnChange = (path, func) => {
  let systemsRef = db.collection(path);
  systemsRef.onSnapshot((querySnapshot) => {
    func(querySnapshot);
  });
};

const updateData = (path, data) => {
  let systemsRef = db.doc(path);
  systemsRef.update(data);
};

const deleteData = (path) => {
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
  let systemsRef = db.doc(path);
  const [isOn, setEnable] = useState(false);

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

const imgSw = (path, field) => {
  let systemsRef = db.doc(path);
  const [isOn, setEnable] = useState(false);

  const toggle = () => {
    systemsRef.update({
      [field]: !isOn,
    });
    //setEnable(!isOn);
  };

  systemsRef.onSnapshot({}, (doc) => {
    if (doc.data()[field] == false) {
      setEnable(false);
    } else if (doc.data()[field] == true) {
      setEnable(true);
    }
  });

  const imageSize = Dimensions.get("window").width * 0.4;
  let imageXml = (
    <Image
      source={Images.powerButtonOff}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
        marginBottom: "10%",
      }}
    />
  );

  let imgSwitch = (
    <TouchableOpacity onPress={toggle} style={{ margin: 20 }}>
      {imageXml}
    </TouchableOpacity>
  );

  return <View>{imgSwitch}</View>;
};

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};

export {
  addData,
  getCollection,
  getCollectionOnChange,
  getData,
  getDataOnChange,
  db,
  sw,
  imgSw,
  updateData,
  deleteData,
};
