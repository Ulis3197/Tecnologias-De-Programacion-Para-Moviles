import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Button = ({ text, rol, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        rol === "number" ? styles.numberContainer : styles.operatorContainer,
      ]}
      onPress={() => onPress(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    backgroundColor: "yellow",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  numberContainer: {
    backgroundColor: "#ffb259",
  },
  operatorContainer: {
    backgroundColor: "#adadad",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
