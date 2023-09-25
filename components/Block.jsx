import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const handlePress = (position, arr, setArr, turn, setTurn) => {
  if (
    !arr[Number(position.charAt(0)) - 1][Number(position.charAt(1)) - 1].isHeld
  ) {
    const newArr = [...arr];
    if (turn === 1) {
      newArr[Number(position.charAt(0)) - 1][
        Number(position.charAt(1)) - 1
      ].value = "X";
      setTurn(2);
    } else if (turn === 2) {
      newArr[Number(position.charAt(0)) - 1][
        Number(position.charAt(1)) - 1
      ].value = "O";
      setTurn(1);
    }

    newArr[Number(position.charAt(0)) - 1][
      Number(position.charAt(1)) - 1
    ].isHeld = true;
    setArr(newArr);
  }
};

const Block = ({ arr, value, position, setArr, turn, setTurn, win }) => {
  return (
    <TouchableOpacity
      style={[
        styles.block,
        value === "X" ? styles.colorX : null,
        value === "O" ? styles.colorO : null,
        win === false ? styles.opacity : null,
      ]}
      onPress={() => {
        handlePress(position, arr, setArr, turn, setTurn);
      }}
    >
      <Text style={styles.blockText}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Block;

const styles = StyleSheet.create({
  colorX: { backgroundColor: "#bed106" },
  colorO: { backgroundColor: "#388e3c" },
  opacity: { opacity: 0.45 },
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
    color: "#FFFFFF",
  },
});
