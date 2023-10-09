import React from "react";
import { TouchableOpacity } from "react-native";
import StyledText from "./StyledText";

function StyledButton({
  onPress,
  text,
  paddingVertical,
  paddingHorizontal,
  fontSize,
  backgroundColor,
  color,
  fontWeight,
  marginVertical,
  marginHorizontal,
  borderRadius,
}) {
  return (
    <TouchableOpacity
      style={{
        paddingVertical,
        paddingHorizontal,
        backgroundColor,
        marginVertical,
        marginHorizontal,
        borderRadius,
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

export default StyledButton;
