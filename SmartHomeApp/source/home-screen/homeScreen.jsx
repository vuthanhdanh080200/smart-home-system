import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Switch,
  StatusBar,
} from "react-native";

import Images from "../config/images";
import Data from "../database/data";

const HomeScreen = () => {
  const [isEnabled, setIsEnabled] = useState(Data.isSystemOn);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const state = {
    switchSystem: [isEnabled, setIsEnabled, toggleSwitch],
  };

  let homeScreen =
    isEnabled === true ? HomeScreenOn(state) : HomeScreenOff(state);
  return (
    <React.Fragment>
      {HeaderBar()}
      {homeScreen}
    </React.Fragment>
  );
};

function HeaderBar() {
  return (
    <View
      style={{
        height: 60,
        backgroundColor: "white",
        marginTop: StatusBar.currentHeight,
        borderBottomWidth: 2,
        borderBottomColor: "whitesmoke",
      }}
    >
      <Text
        style={{
          flex: 1,
          fontSize: 20,
          textAlign: "left",
          textAlignVertical: "center",
          color: "cyan",
          marginLeft: 10,
        }}
      >
        Home
      </Text>
    </View>
  );
}

function HomeScreenOff(state) {
  const imageSize = Dimensions.get("window").width * 0.7;
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
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={state.switchSystem[2]}
        value={state.switchSystem[0]}
      >
        {imageXml}
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 40,
        }}
      >
        System is OFF
      </Text>
    </View>
  );
}

function HomeScreenOn(state) {
  let switchSystem = (
    <Switch
      trackColor={SwitchStyles.trackColor}
      thumbColor={SwitchStyles.trackColor}
      onValueChange={state.switchSystem[2]}
      value={true}
    />
  );

  let onSwitchBar = (
    <View
      style={{
        backgroundColor: "lightcyan",
        flex: 0.06,
        flexDirection: "row-reverse",
        borderColor: "black",
        borderRadius: 10,
        borderWidth: 1,
      }}
    >
      {switchSystem}
      <Text
        style={{
          textAlign: "left",
          alignSelf: "center",
          flex: 0.95,
          fontWeight: "bold",
          fontSize: 15,
        }}
      >
        On
      </Text>
    </View>
  );

  let modeScreen = Data.isLightOn === true ? LightScreen() : AntiTheftScreen();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      {onSwitchBar}
      {modeScreen}
    </View>
  );
}

function LightScreen() {
  const imageSize = Dimensions.get("window").width;
  let imageXml = (
    <Image
      source={Images.fakeChart}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
        }}
      >
        Smart lighting is ON
      </Text>
      {imageXml}
    </View>
  );
}

function AntiTheftScreen() {
  const imageSize = Dimensions.get("window").width;
  let imageXml = (
    <Image
      source={Images.shield}
      style={{
        resizeMode: "contain",
        height: imageSize,
        width: imageSize,
        marginBottom: "10%",
      }}
    />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 40,
        }}
      >
        Anti theft is ON
      </Text>
      {imageXml}
    </View>
  );
}

let SwitchStyles = {
  trackColor: { false: "#767577", true: "aqua" },
  thumbColor: "#fff",
};

export default HomeScreen;
