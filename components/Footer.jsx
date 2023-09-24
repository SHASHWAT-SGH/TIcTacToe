import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const handleReset = (setArr, setTurn) => {
  setArr([
    [
      { isHeld: false, value: "", position: "11" },
      { isHeld: false, value: "", position: "12" },
      { isHeld: false, value: "", position: "13" },
    ],
    [
      { isHeld: false, value: "", position: "21" },
      { isHeld: false, value: "", position: "22" },
      { isHeld: false, value: "", position: "23" },
    ],
    [
      { isHeld: false, value: "", position: "31" },
      { isHeld: false, value: "", position: "32" },
      { isHeld: false, value: "", position: "33" },
    ],
  ]);
  setTurn(1);
};

const Footer = ({ turn, setArr, setTurn }) => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>
        Turn of player:{" "}
        <Text style={styles.playerTurn}>{turn === 1 ? "X" : "O"}</Text>
      </Text>
      <TouchableOpacity style={styles.resetbtn}>
        <Text
          style={styles.resetbtnText}
          onPress={() => handleReset(setArr, setTurn)}
        >
          Reset
        </Text>
      </TouchableOpacity>
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
  playerTurn: {
    fontSize: 24,
  },
  resetbtn: {
    padding: 8,
    backgroundColor: "skyblue",
    width: 80,
    borderRadius: 7,
    alignSelf: "center",
    marginTop: 25,
  },
  resetbtnText: {
    fontSize: 18,
    textAlign: "center",
  },
});
