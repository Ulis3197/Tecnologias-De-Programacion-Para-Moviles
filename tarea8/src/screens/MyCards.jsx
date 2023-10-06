import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LALISA } from "../data/Images";
import { useAppContext } from "../hooks/useAppContext";
import { CARDS } from "../data/CardData";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import IconTypeTheme from "../components/IconTypeTheme";
import Card from "../components/Card";

function MyCards() {
  const { isDarkMode, toggleTheme } = useAppContext();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: isDarkMode ? "black" : "white",
        flex: 1,
        paddingTop: 10,
      }}
    >
      <View style={styles.containerHeader}>
        <Image
          source={LALISA}
          style={{ width: 50, height: 50, borderRadius: 20 }}
        />
        <IconTypeTheme />
      </View>
      <Text
        style={{
          fontSize: 50,
          color: isDarkMode ? "white" : "black",
          marginTop: 25,
          fontWeight: "bold",
        }}
      >
        My Cards
      </Text>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.iconPlus}>
          <Text style={{ fontWeight: "bold", fontSize: 30 }}>+</Text>
        </TouchableOpacity>
        <FlatList
          data={CARDS}
          renderItem={(card) => <Card Card={card.item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem}>
          <Feather name="send" size={24} color="white" />
          <Text style={{ fontSize: 14, color: "white", marginTop: 10 }}>
            Send
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <MaterialIcons name="call-received" size={24} color="white" />
          <Text style={{ fontSize: 14, color: "white", marginTop: 10 }}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <AntDesign name="swap" size={24} color="white" />
          <Text style={{ fontSize: 14, color: "white", marginTop: 10 }}>
            Swap
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionItem2}>
          <Text style={{ fontSize: 14, color: "white" }}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem2}>
          <Text style={{ fontSize: 14, color: "white" }}>Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem2}>
          <Text style={{ fontSize: 14, color: "white" }}>Payments</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem2}>
          <Text style={{ fontSize: 14, color: "white" }}>Sale</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          backgroundColor: "#1F1F1F",
          marginTop: 20,
          paddingVertical: 10,
          borderTopEndRadius: 20,
          borderTopStartRadius: 20,
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>My Contacts</Text>
          <AntDesign name="search1" size={24} color="white" />
        </View>
        <FlatList
          data={CARDS}
          renderItem={(card) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 10,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={LALISA}
                  style={{ width: 50, height: 50, borderRadius: 20 }}
                />
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "white" }}>{card.item.name}</Text>
                  <Text style={{ color: "white" }}>{card.item.number}</Text>
                </View>
              </View>
              <SimpleLineIcons
                name="options-vertical"
                size={24}
                color="white"
              />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{ height: 160 }}
        />
      </View>
    </View>
  );
}

export default MyCards;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  cardsContainer: {
    flexDirection: "row",
    height: "18%",
    marginTop: 20,
  },
  iconPlus: {
    width: "20%",
    height: "100%",
    backgroundColor: "#EAF984",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  optionItem: {
    width: 100,
    height: 100,
    backgroundColor: "#1F1F1F",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  optionItem2: {
    width: 80,
    backgroundColor: "#1F1F1F",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#EAF984",
  },
});
