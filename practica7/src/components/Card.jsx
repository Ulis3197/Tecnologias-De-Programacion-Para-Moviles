import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Card({id, isDarkBlue, text, iconName, iconType}) {
    const customStyles = isDarkBlue ? "#537acd" : "white";
    const icon =
      iconType === "Ionicons" ? (
        <Ionicons name={iconName} size={24} color={customStyles} />
      ) : (
        <AntDesign name={iconName} size={24} color={customStyles}></AntDesign>
      );
  return (
    <View
      style={[
        styles.cardContainer,
        isDarkBlue ? styles.cardContainerDark : styles.cardContainerLight,
      ]}
      key={id}
    >
      <View style={[styles.cardIconContainer, isDarkBlue ? styles.cardIconContainerDark : styles.cardIconContainerLight]}>{icon}</View>
      <Text
        style={[
          styles.cardText,
          isDarkBlue ? styles.cardTextDark : styles.cardTextLight,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  cardContainer: {
    height: 200,
    width: 220,
    backgroundColor: "#e6ecff",
    borderRadius: 40,
    paddingHorizontal: 30,
    justifyContent: "center",
    gap: 50,
    marginHorizontal: 10,
  },
  cardContainerLight: {
    backgroundColor: "#e6ecff",
  },
  cardContainerDark: {
    backgroundColor: "#2362df",
  },
  cardIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 50,
  },
  cardIconContainerLight: {
    backgroundColor: "#2362df",
  },
  cardIconContainerDark: {
    backgroundColor: "white",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardTextLight: {
    color: "#48525e",
  },
  cardTextDark: {
    color: "white",
  },
});
