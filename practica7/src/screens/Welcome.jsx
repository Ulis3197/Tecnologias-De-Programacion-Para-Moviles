import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Card from "../components/Card";
import SymptompsCard from "../components/SymptompsCard";
import Therapist from "../components/Therapist";

const IMAGE = "https://cdn-icons-png.flaticon.com/512/5231/5231019.png";

const THERAPIST = [
  {
    id: 1,
    name: "Dr. Alice Johnson",
    job: "PhysioTherapist",
    rate: 5,
    image: IMAGE,
  },
  {
    id: 2,
    name: "Dr. Mike Johnson",
    job: "PhysioTherapist",
    rate: 4,
    image: IMAGE,
  },
  {
    id: 3,
    name: "Dr. Susan Johnson",
    job: "PhysioTherapist",
    rate: 3.5,
    image: IMAGE,
  },
  {
    id: 4,
    name: "Dr. Jhon Johnson",
    job: "PhysioTherapist",
    rate: 4.8,
    image: IMAGE,
  },
  {
    id: 5,
    name: "Dr. Jhon Johnson",
    job: "PhysioTherapist",
    rate: 4.8,
    image: IMAGE,
  },
  {
    id: 6,
    name: "Dr. Jhon Johnson",
    job: "PhysioTherapist",
    rate: 4.8,
    image: IMAGE,
  },
];

const CARDS = [
  {id:1 ,text: "Start Training", isDarkBlue: true, iconName: "hdd", iconType: "AntDesign"},
  {id:2 ,text: "Start Training", isDarkBlue: false, iconName: "hdd", iconType: "AntDesign"},
  {id:3 ,text: "Start Training", isDarkBlue: true, iconName: "hdd", iconType: "AntDesign"},
  {id:4 ,text: "Start Training", isDarkBlue: false, iconName: "hdd", iconType: "AntDesign"},
];

function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Image
          source={{
            uri: IMAGE,
          }}
          style={styles.headerImage}
        ></Image>
      </View>
      <Text style={styles.titleText}>
        <Text style={{ color: "#c1c0c4" }}>Hello, </Text>
        <Text style={{ color: "#2b3941" }}>Chris</Text>
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {CARDS.map((card) => (
          <Card
            id={card.id}
            iconName={card.iconName}
            iconType={card.iconType}
            text={card.text}
            isDarkBlue={card.isDarkBlue}
          ></Card>
        ))}
      </ScrollView>
      <Text style={styles.textHeader}>What are your</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <SymptompsCard symptom={"fever"}></SymptompsCard>
        <SymptompsCard symptom={"fever"}></SymptompsCard>
        <SymptompsCard symptom={"fever"}></SymptompsCard>
        <SymptompsCard symptom={"fever"}></SymptompsCard>
      </ScrollView>
      <View style={styles.therapistTitle}>
        <Text style={styles.titleText}>Popular therapist</Text>
        <Text>See all</Text>
      </View>
      <FlatList
        data={THERAPIST}
        renderItem={({ item }) => (
          <Therapist
            image={item.image}
            name={item.name}
            job={item.job}
            rate={item.rate}
          />
        )}
        keyExtractor={(item) => item.id}
      ></FlatList>
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
  therapistTitle: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Welcome;
