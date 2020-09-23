import React from "react";

import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Linking,
  Alert,
} from "react-native";

import colors from "../constants/colors.js";

import { RowItem, RowSeperator } from "../components/RowItem.js";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  icon: {
    color: colors.blue,
    fontSize: 12,
  },
});

const openURL = (url) => {
  Linking.openURL(url).catch(() => {
    Alert.alert("Oops! something went wrong.");
  });
};

const RowItems = [
  { text: "Themes", url: "https://learn.reactnativeschool.com/" },
  { text: "React Native Basics", url: "https://learn.reactnativeschool.com/" },
  {
    text: "React Native By Example",
    url: "https://learn.reactnativeschool.com/",
  },
];

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* {RowItems.map((item, index) => {
          <RowItem
            text={item.text}
            rightIcon={<Icon name="chevron-right" style={styles.icon} />}
            onPress={() => openURL(item.url)}
          />;
        })} */}
        <RowItem
          text="Themes"
          rightIcon={<Icon name="chevron-right" style={styles.icon} />}
          onPress={() => openURL("https://learn.reactnativeschool.com/")}
        />
        <RowSeperator />
        <RowItem
          text="React Native Basics"
          rightIcon={<Icon name="chevron-right" style={styles.icon} />}
        />
        <RowSeperator />
        <View style={styles.seperator} />
        <RowItem
          text="React Native By Example"
          rightIcon={<Icon name="chevron-right" style={styles.icon} />}
        />
        <RowSeperator />
        <RowItem
          text="test"
          rightIcon={<Icon name="chevron-right" style={styles.icon} />}
        />
        <RowSeperator />
      </ScrollView>
    </SafeAreaView>
  );
};
