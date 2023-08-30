import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import TextStyled from "../TextStyled/TextStyled";

export default function Login() {
  return (
    <View style={styles.header}>
      <TextStyled
        text={"Sign in to your Account"}
        fontSize={40}
        color={"white"}
        marginBottom={10}
      />
      <TextStyled
        text={"Sign in to your Account"}
        fontSize={15}
        color={"#96a8a8"}
      />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0c1c2c",
    width: width,
    height: height / 3,
    justifyContent: "flex-end",
    paddingBottom: 50,
    padding: 20,
  },
});
