import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";

const CharactersScreen = () => {
  const [characters, setCharacters] = useState([]);

  const getApiData = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const json = await response.json();
      setCharacters(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>CHARACTERS</Text>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
            <Text>{item.gender}</Text>
            <Text>{item.species}</Text>
            <Text>{item.status}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight,
  },
});
