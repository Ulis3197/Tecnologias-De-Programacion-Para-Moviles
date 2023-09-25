import React from "react";
import { Text } from "react-native";

function HomeScreen({ navigation, route }) {
  const { nombre } = route.params;
  return <Text>{nombre}</Text>;
}

export default HomeScreen;
