import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const Block = ({ value }) => {
  return (
    <TouchableOpacity style={styles.block}>
      <Text style={styles.blockText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Block;

const styles = StyleSheet.create({
  block: {
    width: 90,
    height: 90,
    backgroundColor: "white",
    borderRadius: 10,
    justifyContent: "center",
  },
  blockText: {
    fontSize: 50,
    textAlign: "center",
    fontWeight: "800",
  },
});
