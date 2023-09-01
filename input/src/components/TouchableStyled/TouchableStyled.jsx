import React from "react";
import { TouchableOpacity } from "react-native";
import TextStyled from "../TextStyled/TextStyled";

export default function Login({
  onPress,
  text,
  borderRadius,
  backgroundColor,
  paddingHorizontal,
  paddingVertical,
  marginVertical,
  marginHorizontal,
  width,
  height,
  color
}) {
  return (
    <TouchableOpacity
      style={{
        borderRadius,
        backgroundColor,
        paddingHorizontal,
        paddingVertical,
        marginVertical,
        marginHorizontal,
        width,
        height,
      }}
      onPress={onPress}
    >
      <TextStyled text={text} textAlign={"center"} fontSize={10} color={color}></TextStyled>
    </TouchableOpacity>
  );
}
