import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import DataButtons from "../components/Store/DataButtons";
import DataBurger from "../components/Store/DataBurger";

const DATABUTTONS = [
  { id: 1, name: "Burger" },
  { id: 2, name: "Snacks" },
  { id: 3, name: "Drinks" },
  { id: 4, name: "Burger" },
  { id: 5, name: "Snacks" },
  { id: 6, name: "Drinks" },
];

const BURGERS = [
  { id: 1, name: "Chicken Burger", price: "$24.99" },
  { id: 2, name: "Doble Burger", price: "$26.99" },
  { id: 3, name: "Triple Burger", price: "$28.99" },
  { id: 4, name: "BBQ Burger", price: "$21.99" },
];

function Store({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="ios-menu-outline"
          size={30}
          color="#21B2B2"
          onPress={() => navigation.openDrawer()}
        />
        <Ionicons name="notifications" size={30} color="#21B2B2" />
      </View>
      <Text style={{ fontSize: 24, fontWeight: "400", marginTop: 30 }}>
        Store for fast food & etc.
      </Text>
      <View style={styles.containerSearch}>
        <Feather name="search" size={22} color="#21B2B2" />
        <TextInput
          placeholder={"Burger"}
          placeholderTextColor={"black"}
          style={styles.textInput}
        />
        <Octicons name="arrow-switch" size={22} color="gray" />
      </View>
      <FlatList
        data={DATABUTTONS}
        renderItem={({ item }) => <DataButtons item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 30 }}
      />
      <FlatList
        data={BURGERS}
        renderItem={({ item }) => <DataBurger item={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 30 }}
      />
    </View>
  );
}

export default Store;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerSearch: {
    backgroundColor: "#F1F6F6",
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#F1F6F6",
    textDecorationLine: "none",
  },
});
