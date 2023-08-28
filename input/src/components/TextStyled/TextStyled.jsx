import React from "react";
import { Text } from "react-native";

export default function Login({
  text,
  fontSize,
  fontWeight,
  color,
  marginBottom,
  paddingBottom,
  marginTop,
  paddingTop,
  textAlign,
}) {
  return (
    <Text
      style={{
        fontSize,
        fontWeight,
        color,
        marginBottom,
        paddingBottom,
        marginTop,
        paddingTop,
        textAlign,
      }}
    >
      {text}
    </Text>
  );
}
