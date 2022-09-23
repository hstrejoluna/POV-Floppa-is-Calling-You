import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View } from "react-native";
import backFloppa from './assets/imgone.png';
import acceptCall from './assets/accept-call.png';
import endCall from './assets/end-call.png';

const App = () => (
  <View style={styles.container}>
    <ImageBackground
      source={backFloppa}
      resizeMode='cover'
      style={styles.image}
    >
      <View style={styles.paneltop}></View>
      <View style={styles.panel}>
      <Image source={endCall} style={{width: 100, height: 100}} />
        <Image source={acceptCall} style={{width: 100, height: 100}} />

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
  paneltop:{
    flexDirection: "row",
    height: 120,
    backgroundColor: 'skyblue',
  },
  panel:{
    flexDirection: "row",
    height: 150,
    backgroundColor: 'steelblue',
  },
});

export default App;
