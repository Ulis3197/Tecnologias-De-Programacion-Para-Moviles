import React from "react";
import { Touchable, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

export default function StyledTouchable({
  text,
  paddingVertical,
  paddingHorizontal,
  fontSize,
  color,
  fontWeight,
  backgroundColor,
  borderColor,
  onPress
}) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical,
        paddingHorizontal,
        backgroundColor,
        borderColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 1,
      }}
      onPress={onPress}
    >
      <StyledText
        text={text}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
      />
    </TouchableOpacity>
  );
}
