import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import StyledText from "./StyledText";

function Character({ name, status, species, location, image, episode }) {
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
    width: 150,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
});
