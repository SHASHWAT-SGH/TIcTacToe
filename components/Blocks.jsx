import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Block from "../components/Block";

const Blocks = ({ arr }) => {
  return (
    <View style={styles.gameContainer}>
      <View style={styles.blockContainer}>
        {arr.map((item) => {
          return item.map((i) => {
            return <Block key={i.position} value={i.value} />;
          });
        })}
        {/* <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block /> */}
      </View>
    </View>
  );
};

export default Blocks;

const styles = StyleSheet.create({
  gameContainer: {
    marginTop: 10,
    flex: 0.6,
    // backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  blockContainer: {
    width: "85%",
    height: "83%",
    // backgroundColor: "green",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 31,
  },
});
