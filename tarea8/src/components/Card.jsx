import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useAppContext } from "../hooks/useAppContext";

function Card({ Card }) {
  const { isDarkMode, toggleTheme } = useAppContext();
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "white" : "black",
        borderRadius: 20,
        marginLeft: 10,
        width: 200,
        paddingHorizontal: 20,
      }}
    >
      <View style={styles.containerHeader}>
        <FontAwesome
          name="cc-visa"
          size={30}
          color={isDarkMode ? "black" : "white"}
        />
        <Text style={{ color: isDarkMode ? "black" : "white", fontSize: 20 }}>
          {Card.number}
        </Text>
      </View>
      <Text
        style={{ color: isDarkMode ? "black" : "white", fontSize: 25, flex: 1 }}
      >
        {Card.money}
      </Text>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  containerHeader: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 10,
  },
});
