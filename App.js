import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";


var backgroundFloppa = require('./assets/imgone.png');

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={backgroundFloppa} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "space-between"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default App;