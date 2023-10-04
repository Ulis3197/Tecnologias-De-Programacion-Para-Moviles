import React, { useContext } from "react";
import { Text, View } from "react-native";
import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

function CardId() {
  const {person} = useAppContext();
  return (
    <View
      style={{
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text style={{ fontSize: 26, textAlign: "center" }}>
        {"ID: " + person.id}
      </Text>
    </View>
  );
}

export default CardId;
