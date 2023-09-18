import React from "react";
import { Text, TouchableOpacity } from "react-native";

function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderRadius: 5,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
