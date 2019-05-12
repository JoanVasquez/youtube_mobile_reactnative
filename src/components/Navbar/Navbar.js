import React, { Component } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class Navbar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Image
          source={require("../../assets/images/youtube_logo.png")}
          style={styles.logo}
        />
        <View style={styles.navBarIcons}>
          <TouchableOpacity>
            <Icon style={styles.icons} name="search" size={25} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon style={styles.icons} name="account-circle" size={25} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#fff",
    height: 45,
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    width: 98,
    height: 22
  },
  navBarIcons: {
    flexDirection: "row"
  },
  icons: {
    marginLeft: 25
  }
});

export default Navbar;
