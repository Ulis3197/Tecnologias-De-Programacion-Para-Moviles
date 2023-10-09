import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function TypesMenu({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: "white" }}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default TypesMenu;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#252837",
    borderRadius: 10,
    marginLeft: 10,
  },
});
