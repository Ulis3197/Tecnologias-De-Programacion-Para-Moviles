import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import TextStyled from "../TextStyled/TextStyled";
import TouchableStyled from "../TouchableStyled/TouchableStyled";

export default function Login() {
  return (
    <View style={styles.content}>
      <View style={styles.contentInput}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        ></TextInput>
        <TextStyled
          text={"Forgot Password?"}
          marginTop={15}
          textAlign={"right"}
          color={"green"}
        ></TextStyled>
        <TouchableStyled
          text={"Login"}
          borderRadius={5}
          backgroundColor={"#3ddb4b"}
          paddingVertical={15}
          marginVertical={20}
        ></TouchableStyled>
        <TextStyled
          text={"Or login with"}
          textAlign={"center"}
          marginTop={20}
        ></TextStyled>
        <View style={styles.contentButton}>
          <TouchableStyled
            text={"Google"}
            borderRadius={5}
            backgroundColor={"#c2c0c0"}
            paddingVertical={15}
            paddingHorizontal={20}
          ></TouchableStyled>
          <TouchableStyled
            text={"Facebook"}
            borderRadius={5}
            backgroundColor={"#c2c0c0"}
            paddingVertical={15}
            paddingHorizontal={20}
          ></TouchableStyled>
        </View>
        <View style={styles.containerText}>
          <TextStyled text={"Dont have an account? "}></TextStyled>
          <TextStyled text={"Register"} color={"green"}></TextStyled>
        </View>
      </View>
    </View>
  );
}

const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    height: (height / 3) * 2,
    width: width,
    backgroundColor: "white",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    marginTop: 30,
    paddingHorizontal: 10,
  },
  contentInput: {
    marginTop: 40,
    width: (width / 5) * 4,
  },
  contentButton: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
});
