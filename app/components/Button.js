import React from "react";

import colors from "../constants/colors.js";

import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    color: colors.white,
    fontSize: 16,
  },
});

export default ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image
        source={require("../assets/images/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
