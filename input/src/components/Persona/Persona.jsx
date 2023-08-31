import React from "react";
import { View, Text } from "react-native";

export default function Persona(props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: props.id % 2 == 0 ? "red" : "blue",
      }}
    >
      <Text style={{ fontSize: 40 }}>{props.name}</Text>
      <Text style={{ fontSize: 40 }}>{props.lastname}</Text>
    </View>
  );
}
