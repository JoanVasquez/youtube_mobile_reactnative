import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import nFormatter from "./viewsFormatter";

const ListItem = props => (
  <View style={styles.listItem}>
    <Image
      source={{
        uri: props.videoData.snippet.thumbnails.standard.url
      }}
      style={styles.thumbnails}
    />
    <View style={styles.descriptions}>
      <Image
        source={{
          uri: "https://randomuser.me/api/portraits/women/94.jpg"
        }}
        style={styles.user}
      />
      <View style={styles.videoDetails}>
        <Text numberOfLines={2} style={styles.videoTitle}>
          {props.videoData.snippet.title}
        </Text>
        <Text style={styles.videoStats}>{`${
          props.videoData.snippet.channelTitle
        } · ${nFormatter(
          props.videoData.statistics.viewCount,
          1
        )} · 3 months ago`}</Text>
      </View>
      <TouchableOpacity>
        <Icon
          name="more-vert"
          size={20}
          color="#999"
          style={{ marginTop: 15 }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 15
  },
  thumbnails: {
    height: 200
  },
  descriptions: {
    flexDirection: "row",
    paddingTop: 15
  },

  user: {
    width: 50,
    height: 50,
    borderRadius: 25
  },

  videoDetails: {
    flex: 1,
    paddingHorizontal: 15
  },

  videoTitle: {
    fontSize: 16,
    color: "#3C3C3C"
  },

  videoStats: {
    fontSize: 14,
    paddingTop: 3
  }
});

export default ListItem;
