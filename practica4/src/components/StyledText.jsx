import React from "react";
import { Text } from "react-native";

function StyledText({
  text,
  color,
  fontWeight,
  fontSize,
  marginVertical,
  marginHorizontal,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
}) {
  return (
    <Text
      style={{
        color,
        fontWeight,
        fontSize,
        marginVertical,
        marginHorizontal,
        paddingHorizontal,
        paddingVertical,
        paddingTop,
      }}
    >
      {text}
    </Text>
  );
}

export default StyledText;
