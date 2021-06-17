import * as firebase from "firebase";
import "firebase/firestore";
import { LogBox, SnapshotViewIOS } from "react-native";

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

const getData = (key, field) => {
  let systemsRef = db.collection("systems").doc(key);
  const data = (system) => {
    if (field == "isSystemOn") {
      return system.isSystemOn;
    }
  };

  let re = systemsRef
    .withConverter(systemConverter)
    .get()
    .then((doc) => {
      if (doc.exists) {
        var system = doc.data();
        if (field == "isSystemOn") {
          return system.isSystemOn;
        }
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
  console.log(re);
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

export {
  onPress,
  onPress1,
  addCity,
  updateCity,
  deleteCity,
  listenChange,
  addSystem,
  getData,
};
