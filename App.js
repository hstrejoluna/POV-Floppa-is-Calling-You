import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

var backgroundFloppa = require("./assets/imgone.png");

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={backgroundFloppa}
      resizeMode='cover'
      style={styles.image}
    >
      <View style={styles.panel}></View>
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
  panel:{
    flexDirection: "row",
    height: 120,
    backgroundColor: 'steelblue',
  },
});

export default App;
