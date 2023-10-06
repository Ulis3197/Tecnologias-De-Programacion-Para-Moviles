import React from "react";
import { Feather } from "@expo/vector-icons";
import { useAppContext } from "../hooks/useAppContext";

function IconTypeTheme() {
  const { isDarkMode, toggleTheme } = useAppContext();
  return (
    <>
      {isDarkMode ? (
        <Feather name="sun" size={30} color="white" onPress={toggleTheme} />
      ) : (
        <Feather name="moon" size={30} color="black" onPress={toggleTheme} />
      )}
    </>
  );
}

export default IconTypeTheme;
