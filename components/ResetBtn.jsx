import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const handleReset = (setArr, setTurn, setShowModal, setWinner) => {
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
  setShowModal(false);
  setWinner(null);
};

const ResetBtn = ({ setArr, setTurn, setShowModal, setWinner }) => {
  return (
    <TouchableOpacity style={styles.resetbtn}>
      <Text
        style={styles.resetbtnText}
        onPress={() => handleReset(setArr, setTurn, setShowModal, setWinner)}
      >
        Reset
      </Text>
    </TouchableOpacity>
  );
};

export default ResetBtn;

const styles = StyleSheet.create({
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
