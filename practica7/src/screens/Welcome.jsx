import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
          }}
          style={styles.headerImage}
        ></Image>
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello, </Text>
        <Text style={{ color: "#2b3941" }}>Chris</Text>
      </Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardIconContainer}>
          <AntDesign name="hdd" size={24} color="white"></AntDesign>
        </View>
        <Text style={styles.cardText}>Start Training</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  titleText: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardContainer: {
    height: 200,
    width: 220,
    backgroundColor: "#e6ecff",
    borderRadius: 40,
    paddingHorizontal: 30,
    justifyContent: "center",
    gap: 50,
  },
  cardIconContainer: {
    backgroundColor: "#2362df",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    padding: 5,
    borderRadius: 50,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#48525e",
  },
});

export default Welcome;
