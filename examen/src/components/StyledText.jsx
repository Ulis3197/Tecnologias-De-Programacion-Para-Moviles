import React from "react";
import { Text } from "react-native";

function StyledText({
  text,
  paddingVertical,
  paddingHorizontal,
  fontSize,
  color,
  fontWeight,
  textAlign,
  marginVertical,
  marginHorizontal,
}) {
  return (
    <Text
      style={{
        paddingVertical,
        paddingHorizontal,
        fontSize,
        color,
        fontWeight,
        textAlign,
        marginVertical,
        marginHorizontal,
      }}
    >
      {text}
    </Text>
  );
}

export default StyledText;
