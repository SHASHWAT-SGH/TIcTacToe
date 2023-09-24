import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blocks from "../components/Blocks";

const arr = [
  [
    { isHeld: false, value: "X", position: "11" },
    { isHeld: false, value: "O", position: "12" },
    { isHeld: false, value: "X", position: "13" },
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
];

const GameScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <Blocks arr={arr} />
      <Footer />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#d7dfe3",
  },
});
