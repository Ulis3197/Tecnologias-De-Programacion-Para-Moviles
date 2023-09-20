import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Icons({ iconType, name, size, color, onPress }) {
  return (
    <>
      {iconType === "Feather" && (
        <Feather name={name} size={size} color={color} onPress={onPress} />
      )}
      {iconType === "MaterialIcons" && (
        <MaterialIcons
          name={name}
          size={size}
          color={color}
          onPress={onPress}
        />
      )}
    </>
  );
}

export default Icons;
