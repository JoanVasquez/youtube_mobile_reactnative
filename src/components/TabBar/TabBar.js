import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const TabBar = props => (
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem}>
      <Icon name="home" size={25} />
      <Text style={styles.tabTitle}>Home</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Icon name="whatshot" size={25} />
      <Text style={styles.tabTitle}>Trending</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Icon name="subscriptions" size={25} />
      <Text style={styles.tabTitle}>Subscriptions</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.tabItem}>
      <Icon name="folder" size={25} />
      <Text style={styles.tabTitle}>Library</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: "#fff",
    borderTopWidth: 0.5,
    borderColor: "#E5E5E5",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center"
  },
  tabTitle: {
    fontSize: 11,
    color: "#3c3c3c",
    padding: 4
  }
});
export default TabBar;
