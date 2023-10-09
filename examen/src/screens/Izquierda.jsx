import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ICON, LOBO, FLOR, PAISAJE, BOT } from "../data/img";
import StyledText from "../components/StyledText";
import { Feather } from "@expo/vector-icons";
import TypesMenu from "../components/TypesMenu";
import ImageMenu from "../components/ImageMenu";
import Recommended from "../components/Recommended";

const TYPES = [
  { id: 1, name: "All" },
  { id: 2, name: "New" },
  { id: 3, name: "Most Viewed" },
  { id: 4, name: "All" },
  { id: 5, name: "New" },
  { id: 6, name: "Most Viewed" },
];

const IMAGES = [
  { id: 1, img: LOBO },
  { id: 2, img: FLOR },
  { id: 3, img: PAISAJE },
  { id: 4, img: BOT },
];

function Izquierda() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <StyledText text={"SnapSync"} color={"white"} fontSize={24} />
        <Image
          source={ICON}
          style={{
            width: 40,
            height: 40,
            alignSelf: "center",
            borderRadius: 50,
          }}
        />
      </View>
      <View style={styles.containerSearch}>
        <Feather name="search" size={22} color="#777882" />
        <TextInput
          placeholder={"Search"}
          placeholderTextColor={"#777882"}
          style={styles.textInput}
        />
      </View>
      <View style={styles.flat1}>
        <FlatList
          data={TYPES}
          renderItem={(item) => <TypesMenu item={item.item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StyledText
        text={"Collections"}
        color={"white"}
        fontSize={30}
        marginHorizontal={20}
        marginVertical={20}
      />
      <View style={styles.flat2}>
        <FlatList
          data={IMAGES}
          renderItem={(item) => <ImageMenu item={item.item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <StyledText
        text={"Recommended"}
        color={"white"}
        fontSize={30}
        marginHorizontal={20}
        marginVertical={20}
      />
      <View style={styles.flat2}>
        <FlatList
          data={IMAGES}
          renderItem={(item) => <Recommended item={item.item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

export default Izquierda;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1D2B",
    paddingTop: 30,
  },
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  containerSearch: {
    backgroundColor: "#252837",
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    backgroundColor: "#252837",
    textDecorationLine: "none",
  },
  flat1: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  flat2: {
    marginHorizontal: 20,
  },
});
