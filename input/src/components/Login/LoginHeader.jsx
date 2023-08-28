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
        paddingBottom={10}
      />
      <TextStyled
        text={"Sign in to your Account"}
        fontSize={10}
        color={"white"}
      />
    </View>
  );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    width: width,
    height: height / 3,
    justifyContent: "center",
  },
});
