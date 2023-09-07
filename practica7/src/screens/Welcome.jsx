import React from "react";
import { Text, View, StyleSheet, Image, ScrollView } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Card from "../components/Card";

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
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Card
          iconName={"hdd"}
          iconType={"AntDesign"}
          text={"Start Training"}
          isDarkBlue
        ></Card>
        <Card
          iconName={"hdd"}
          iconType={"AntDesign"}
          text={"Start Training"}
          isDarkBlue={false}
        ></Card>
        <Card
          iconName={"hdd"}
          iconType={"AntDesign"}
          text={"Start Training"}
          isDarkBlue
        ></Card>
        <Card
          iconName={"hdd"}
          iconType={"AntDesign"}
          text={"Start Training"}
          isDarkBlue={false}
        ></Card>
      </ScrollView>
      <Text style={styles.textHeader}>What are your</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.symptomsContainer}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#48525e" }}>
            I'm Fine
          </Text>
        </View>
        <View style={styles.symptomsContainer}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#48525e" }}>
            I'm Fine
          </Text>
        </View>
        <View style={styles.symptomsContainer}>
          <Text style={{ fontSize: 18, fontWeight: "600", color: "#48525e" }}>
            I'm Fine
          </Text>
        </View>
      </ScrollView>
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
  textHeader: {
    fontSize: 20,
    color: "#495558",
    fontWeight: "bold",
  },
  symptomsContainer: {
    backgroundColor: "#e6ecff",
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginRight: 15,
  },
});

export default Welcome;
