import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const ButtonNumber = ({ data }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {data.number === "left" ? (
        <AntDesign name="left" size={24} color="white" />
      ) : (
        <Text style={styles.number}>{data.number}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonNumber;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#353333",
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: 5
  },
  number: {
    color: "white",
    fontWeight: "700",
    fontSize: 30,
  },
});
