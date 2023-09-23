import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import Character from "../components/Character";

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
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <Character
            name={item.name}
            status={item.status}
            species={item.species}
            location={item.location.name}
            image={item.image}
            episode={item.episode[0]}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CharactersScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
});