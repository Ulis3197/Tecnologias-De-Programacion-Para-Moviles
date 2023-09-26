import React from "react";
import { StyleSheet, View, Image } from "react-native";
import StyledText from "./StyledText";

function CharacterInfo({ item }) {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.img}
        />
      </View>
      <StyledText text={"Name: " + item.name}></StyledText>
      <StyledText text={"Status: " + item.status}></StyledText>
      <StyledText text={"Species: " + item.species}></StyledText>
      <StyledText text={"Type: " + item.type}></StyledText>
      <StyledText text={"Gender: " + item.gender}></StyledText>
      <StyledText text={"Origin: " + item.origin.name}></StyledText>
      <StyledText text={"Location: " + item.location.name}></StyledText>
    </View>
  );
}

export default CharacterInfo;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  img: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
});
