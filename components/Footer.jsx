import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import ResetBtn from "./ResetBtn";

const Footer = ({ turn, setArr, setTurn, setShowModal, setWinner }) => {
  return (
    <View style={styles.footerWrapper}>
      <Text style={styles.footerText}>
        Turn of player:{" "}
        <Text style={styles.playerTurn}>{turn === 1 ? "X" : "O"}</Text>
      </Text>
      <ResetBtn
        setArr={setArr}
        setTurn={setTurn}
        setShowModal={setShowModal}
        setWinner={setWinner}
      />
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
});
