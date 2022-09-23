import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View } from "react-native";
import backFloppa from "./assets/imgone.png";
import acceptCall from "./assets/accept-call.png";
import endCall from "./assets/end-call.png";

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={backFloppa}
      resizeMode='cover'
      style={styles.image}
    >
      <View style={styles.paneltop}></View>
      <View style={styles.panel}>
        <Image source={endCall} style={{ width: 100, height: 100 }} />
        <Image source={acceptCall} style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.paneltext}>
        <Text style={{ color: "white", fontSize: 18 }}>decline</Text>
        <Text style={{ color: "white", fontSize: 18 }}>accept</Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  paneltop: {
    flexDirection: "row",
    height: 120,
  },
  panel: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 40,
    height: 152,
  },
  paneltext: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingBottom: 2,
    height: 30,
  },
});

export default App;
