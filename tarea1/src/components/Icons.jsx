import React from 'react'
import { Feather } from "@expo/vector-icons";

function Icons({iconType, name, size, color}) {
  return (
    <>
      {iconType === "Feather" && (
        <Feather name={name} size={size} color={color} />
      )}
    </>
  );
}

export default Icons