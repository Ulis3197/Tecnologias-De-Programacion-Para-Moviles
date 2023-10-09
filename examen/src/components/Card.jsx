import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";

function Card({ item }) {
  const { isDarkMode, toggleTheme } = useAppContext();
  return (
    <View style={styles.container}>
      <Text>{"Hola"}</Text>
      <Text>{"Siuu"}</Text>
      <Text>{"Hola"}</Text>
      <Text>{"Siuu"}</Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginLeft: 10,
    width: 200,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "green",
  },
});
