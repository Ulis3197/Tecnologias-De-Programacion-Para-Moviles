import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

function CardFooter() {
  const { person, handleIsActive } = useAppContext();

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text>{"Country: " + person.country}</Text>
      <Text>{"Country: " + person.city}</Text>
      <TouchableOpacity
        style={{ backgroundColor: "green", padding: 10, borderRadius: 10 }}
        onPress={() => handleIsActive()}
      >
        <Text>Is active: {JSON.stringify(person.isActive)}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CardFooter;
