import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Tic Tac Toe</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 0.15,
    justifyContent: "flex-end",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    color: "black",
  },
});
