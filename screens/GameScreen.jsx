import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blocks from "../components/Blocks";
import WinnerModal from "../components/WinnerModal";

const GameScreen = () => {
  const [turn, setTurn] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const [arr, setArr] = useState([
    [
      { isHeld: false, value: "", position: "11", win: null },
      { isHeld: false, value: "", position: "12", win: null },
      { isHeld: false, value: "", position: "13", win: null },
    ],
    [
      { isHeld: false, value: "", position: "21", win: null },
      { isHeld: false, value: "", position: "22", win: null },
      { isHeld: false, value: "", position: "23", win: null },
    ],
    [
      { isHeld: false, value: "", position: "31", win: null },
      { isHeld: false, value: "", position: "32", win: null },
      { isHeld: false, value: "", position: "33", win: null },
    ],
  ]);
  useEffect(() => {
    checkWinner();
  }, [arr]);

  const [winner, setWinner] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      winner ? setShowModal(true) : null;
    }, 1000);
  }, [winner]);

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
      for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
          if (i != j) {
            arr[i][j].win = false;
          }
        }
      }
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
      for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
          if (!((i == 0 && j == 2) || (i == j) == 1 || (i == 2 && j == 0))) {
            arr[i][j].win = false;
          }
        }
      }
    } else {
      // check if all the blocks are fulled if yes: show draw

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
          for (ii = 0; ii <= 2; ii++) {
            for (j = 0; j <= 2; j++) {
              if (
                !(
                  (j == i && ii == 0) ||
                  (j == i && ii == 1) ||
                  (j == i && ii == 2)
                )
              ) {
                arr[ii][j].win = false;
              }
            }
          }
          break;
        } else {
          // horizontal
          if (
            arr[i][0].isHeld &&
            arr[i][1].isHeld &&
            arr[i][2].isHeld &&
            arr[i][0].value == arr[i][1].value &&
            arr[i][0].value == arr[i][2].value
          ) {
            setWinner(arr[i][0].value);
            for (ii = 0; ii <= 2; ii++) {
              for (j = 0; j <= 2; j++) {
                if (
                  !(
                    (ii == i && j == 0) ||
                    (ii == i && j == 1) ||
                    (ii == i && j == 2)
                  )
                ) {
                  arr[ii][j].win = false;
                }
              }
            }
            break;
          }
        }
      }

      let count = 0;
      for (i = 0; i <= 2; i++) {
        for (j = 0; j <= 2; j++) {
          if (arr[i][j].isHeld) {
            count++;
          }
        }
      }
      if (count === 9) {
        setWinner("Draw!");
      }
    }
  };

  return (
    <View style={styles.wrapper}>
      <WinnerModal
        showModal={showModal}
        setShowModal={setShowModal}
        winner={winner}
        setArr={setArr}
        setTurn={setTurn}
        setWinner={setWinner}
      />
      <Header />
      <Blocks arr={arr} setArr={setArr} turn={turn} setTurn={setTurn} />
      <Footer
        turn={turn}
        setArr={setArr}
        setTurn={setTurn}
        setShowModal={setShowModal}
        setWinner={setWinner}
      />
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
