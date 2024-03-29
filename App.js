import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navbar from "./src/components/Navbar/Navbar";
import TabBar from "./src/components/TabBar/TabBar";
import VideoList from "./src/components/VideoList/VideoList";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <VideoList />
        <TabBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
