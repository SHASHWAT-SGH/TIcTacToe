import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import React from "react";
import ResetBtn from "./ResetBtn";

const WinnerModal = ({
  setArr,
  setTurn,
  showModal,
  setShowModal,
  winner,
  setWinner,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setModalVisible(!showModal);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              {winner != "Draw!" ? "The winner is:" : null} {winner}
            </Text>
            <ResetBtn
              setArr={setArr}
              setTurn={setTurn}
              setShowModal={setShowModal}
              setWinner={setWinner}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WinnerModal;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "90%",
    position: "absolute",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
