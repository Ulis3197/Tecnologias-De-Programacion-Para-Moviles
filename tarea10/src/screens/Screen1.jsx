import React from "react";
import StyledText from "../components/StyledText";
import { Image, View, StyleSheet, TextInput, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FilterItem from "../components/FilterItem";
import Card from "../components/Card";

const IMAGE =
  "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg";

function Screen1({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View>
          <StyledText
            text="Discover"
            fontSize={32}
            color="black"
            fontWeight="bold"
          />
          <StyledText text="your products" fontSize={26} color="black" />
        </View>
        <Image source={{ uri: IMAGE }} style={styles.img} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.textInput} placeholder="🔍 Divoom" />
        <View style={styles.iconContainer}>
          <AntDesign name="menu-fold" size={24} color="black" />
        </View>
      </View>
      <View style={styles.filterItemContainer}>
        <FilterItem text="Miniso" />
        <FilterItem text="Neurso" />
      </View>
      <StyledText
        text="Popular Product"
        fontSize={32}
        color="black"
        fontWeight="bold"
        paddingVertical={20}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <Card
            key={item.id}
            text={item.text}
            img={item.img}
            numeral={item.numeral}
            price={item.price}
          />
        ))}
      </ScrollView>
      <View style={styles.menu}>
        <View style={styles.menuIconContainer}>
          <Feather name="home" size={40} color="white" />
        </View>
        <SimpleLineIcons name="handbag" size={40} color="black" />
        <Ionicons name="notifications-outline" size={40} color="black" />
        <AntDesign name="user" size={40} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
  },
  img: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 20,
    height: 60,
    width: "75%",
    paddingHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    borderWidth: 1,
    borderColor: "#FDB135",
    borderRadius: 20,
    backgroundColor: "#FDB135",
    height: 60,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  filterItemContainer: {
    flexDirection: "row",
    gap: 20,
    paddingTop: 20,
  },
  menu:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    paddingTop:20,
  },
  menuIconContainer:{
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20, 
    width: 60,
    height: 60,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"black"
  }
});

export default Screen1;
