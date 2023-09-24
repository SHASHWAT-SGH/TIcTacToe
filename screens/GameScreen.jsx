import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blocks from "../components/Blocks";

const GameScreen = () => {
  const [turn, setTurn] = useState(1);
  const [arr, setArr] = useState([
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
  useEffect(() => {
    checkWinner();
  }, [arr]);

  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    // diagonal condition L to R
    if (
      arr[0][0].isHeld &&
      arr[1][1].isHeld &&
      arr[2][2].isHeld &&
      arr[0][0].value == arr[1][1].value &&
      arr[0][0].value == arr[2][2].value
    ) {
      setWinner(arr[0][0].value);
    }
    // diagonal condition R to L
    else if (
      arr[0][2].isHeld &&
      arr[1][1].isHeld &&
      arr[2][0].isHeld &&
      arr[0][2].value == arr[1][1].value &&
      arr[0][2].value == arr[2][0].value
    ) {
      setWinner(arr[0][2].value);
    } else {
      // straight down
      for (i = 0; i <= 2; i++) {
        if (
          arr[0][i].isHeld &&
          arr[1][i].isHeld &&
          arr[2][i].isHeld &&
          arr[0][i].value == arr[1][i].value &&
          arr[0][i].value == arr[2][i].value
        ) {
          setWinner(arr[0][i].value);
        } else {
          if (
            arr[i][0].isHeld &&
            arr[i][1].isHeld &&
            arr[i][2].isHeld &&
            arr[i][0].value == arr[i][1].value &&
            arr[i][0].value == arr[i][2].value
          ) {
            setWinner(arr[i][0].value);
          }
        }
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <Blocks arr={arr} setArr={setArr} turn={turn} setTurn={setTurn} />
      <Footer turn={turn} setArr={setArr} setTurn={setTurn} />
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
