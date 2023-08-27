import React from "react";
import { TouchableOpacity } from "react-native";
import { StyledText } from "../StyledText";

export const StyledTouchable = ({
  backgroundColor,
  paddingHorizontal,
  paddingVertical,
  text,
  borderRadius,
  onPress,
  marginHorizontal,
  marginVertical,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor,
        paddingHorizontal,
        paddingVertical,
        borderRadius,
        marginHorizontal,
        marginVertical,
      }}
      onPress={onPress}
    >
      <StyledText text={text} fontWeight={"bold"}/>
    </TouchableOpacity>
  );
};
