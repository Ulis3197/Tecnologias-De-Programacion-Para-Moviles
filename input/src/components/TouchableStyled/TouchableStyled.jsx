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
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={{ borderRadius, backgroundColor, paddingHorizontal, paddingVertical, marginVertical, width, height }}
      onPress={onPress}
    >
      <TextStyled text={text} textAlign={'center'} fontSize={15}></TextStyled>
    </TouchableOpacity>
  );
}
