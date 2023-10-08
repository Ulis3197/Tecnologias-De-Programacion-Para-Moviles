import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

function DataButtons({ item }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: "white" }}>{item.name}</Text>
    </TouchableOpacity>
  );
}

export default DataButtons;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#21B2B2",
    borderRadius: 10,
    marginLeft: 10,
  },
});
