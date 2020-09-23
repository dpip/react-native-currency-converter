import React from "react";

import colors from "../constants/colors.js";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  text: {
    fontSize: 16,
    color: colors.textColor,
  },
  seperator: {
    backgroundColor: colors.borderColor,
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    marginRight: 20,
  },
});

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      {rightIcon}
    </TouchableOpacity>
  );
};

export const RowSeperator = () => {
  return <View style={styles.seperator} />;
};
