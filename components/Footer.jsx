import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Footer = () => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>It's X's turn</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerWrapper: {
    flex: 0.25,
    paddingTop: 10,
    // backgroundColor: "red",
  },
  footerText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
  },
});
