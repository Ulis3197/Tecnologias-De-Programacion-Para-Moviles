import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import StyledText from "./StyledText";

export default function StyledTextInput({
  text,
  fontSize,
  color,
  fontWeight,
  placeholder,
  placeholderTextColor,
  password,
}) {
  return (
    <>
      <View style={{ marginVertical: 20 }}>
        <StyledText
          text={text}
          fontWeight={fontWeight}
          fontSize={fontSize}
          color={color}
        ></StyledText>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={password}
        ></TextInput>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#EBEBEB",
    alignItems: "center",
  },
});
