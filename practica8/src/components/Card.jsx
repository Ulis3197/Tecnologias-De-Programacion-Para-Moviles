import React from "react";
import { Text, View } from "react-native";
import CardId from "./CardId";
import CardFooter from "./CardFooter";
import { useAppContext } from "../hooks/useAppContext";

function Card() {
  const {person} = useAppContext();
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        padding: 20,
        backgroundColor: person.isActive ? "red" : "white",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>Card Component</Text>
      <CardId />
      <Text style={{ fontSize: 20 }}>{"Name: " + person.name}</Text>
      <Text style={{ fontSize: 20 }}>{"Lastname: " + person.lastname}</Text>
      <CardFooter />
    </View>
  );
}

export default Card;
