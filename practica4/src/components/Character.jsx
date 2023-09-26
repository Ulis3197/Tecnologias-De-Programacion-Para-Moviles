import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import StyledText from "./StyledText";

function Character({
  name,
  status,
  species,
  location,
  image,
  episode,
  navigation,
  item,
}) {
  const [currentEpisode, setCurrentEpisode] = useState();

  const getEpisode = async () => {
    try {
      const response = await fetch(episode);
      const json = await response.json();
      setCurrentEpisode(json.name);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getEpisode();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.img}
      />
      <View style={styles.textContainer}>
        <StyledText
          text={name}
          fontWeight="bold"
          color={"white"}
          fontSize={16}
        />
        <StyledText
          text={
            status === "Alive"
              ? "🟢 " + status + " - " + species
              : status === "Dead"
              ? "🔴 " + status + " - " + species
              : "🟣 " + status + " - " + species
          }
          fontWeight="bold"
          color={"white"}
          fontSize={12}
        />

        <StyledText
          text={"Last known location:"}
          fontWeight="bold"
          color={"#9E9E9E"}
          paddingTop={10}
        />
        <StyledText
          text={location}
          fontWeight="bold"
          color={"white"}
          fontSize={12}
        />

        <StyledText
          text={"First seen in:"}
          fontWeight="bold"
          color={"#9E9E9E"}
          paddingTop={10}
        />
        <StyledText
          text={currentEpisode}
          fontWeight="bold"
          color={"white"}
          fontSize={12}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Character", {item: item})}
        >
          <StyledText color={"white"} fontSize={12} text={"Ver más"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Character;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3C3E44",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
  },
  textContainer: {
    marginHorizontal: 20,
  },
  text: {
    fontWeight: "bold",
  },
  img: {
    width: 170,
    height: 170,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
  },
});
