import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import TouchableStyled from "../TouchableStyled/TouchableStyled";

export default function Persona(props) {
  return (
    <View style={styles.containerCard}>
      <View style={styles.containerImage}>
        {props.image && (
          <Image
            source={{
              uri: props.image,
            }}
            style={styles.image}
          ></Image>
        )}
      </View>
      <View style={styles.containerText}>
        <Text style={{ fontSize: 25 }}>{props.name}</Text>
        <Text style={{ fontSize: 20 }}>{props.lastname}</Text>
      </View>
      <View style={styles.containerButton}>
        <TouchableStyled
          text={"Aceptar"}
          borderRadius={20}
          backgroundColor={"#256FFF"}
          paddingVertical={10}
          paddingHorizontal={20}
          marginHorizontal={10}
          color={"white"}
        ></TouchableStyled>
        <TouchableStyled
          text={"Rechazar"}
          borderRadius={20}
          backgroundColor={"white"}
          paddingVertical={10}
          paddingHorizontal={20}
          marginHorizontal={10}
        ></TouchableStyled>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#dce4fc",
  },
  containerImage: {
    marginRight: 10,
  },
  containerText: {
    marginLeft: 10,
  },
  containerButton: {
    flexDirection: "row",
  },
  image: {
    borderRadius: 100,
    backgroundColor: "#adadad",
    width: 50,
    height: 50,
  },
});

