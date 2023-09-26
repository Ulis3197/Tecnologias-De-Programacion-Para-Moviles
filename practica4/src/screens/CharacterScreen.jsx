import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CharacterInfo from "../components/CharacterInfo";

function CharacterScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <CharacterInfo item={item} />
    </View>
  );
}

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});
