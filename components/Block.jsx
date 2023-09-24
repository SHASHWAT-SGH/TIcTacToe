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

const Block = ({ arr, value, position, setArr, turn, setTurn }) => {
  return (
    <TouchableOpacity
      style={styles.block}
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
