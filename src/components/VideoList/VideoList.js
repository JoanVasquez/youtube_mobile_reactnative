import React, { Component } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "./ListItem";

import youtubeAPI from "../../youtubeAPI.json";

class VideoList extends Component {
  render() {
    return (
      <FlatList
        data={youtubeAPI.items}
        renderItem={props => <ListItem videoData={props.item} />}
        keyExtractor={props => props.id}
        itemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              backgroundColor: "#E5E5E5"
            }}
          />
        )}
        style={styles.videoList}
      />
    );
  }
}

const styles = StyleSheet.create({
  videoList: {
    flex: 1
  }
});

export default VideoList;
