import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../hooks/useAppContext";

import IconTypeTheme from "../components/IconTypeTheme";
import { GRAFICA } from "../data/Images";
import { CARDS } from "../data/CardData";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

function Balance() {
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
        <AntDesign
          name="arrowleft"
          size={24}
          color={isDarkMode ? "white" : "black"}
        />
        <IconTypeTheme />
      </View>
      <Text
        style={{
          fontSize: 20,
          color: isDarkMode ? "#AEAEAE" : "black",
          marginTop: 25,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        Total Balance
      </Text>
      <Text
        style={{
          fontSize: 50,
          color: isDarkMode ? "white" : "black",
          marginTop: 5,
          fontWeight: "bold",
          alignSelf: "center",
        }}
      >
        $32,751.75
      </Text>
      <Image
        source={GRAFICA}
        style={{ width: 400, height: 300, alignSelf: "center" }}
      />
      <View
        style={{
          backgroundColor: "#EAF984",
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
          <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
            Transactions
          </Text>
          <Text style={{ color: "#757F4B", fontSize: 20 }}>See all</Text>
        </View>
        <FlatList
          data={CARDS}
          renderItem={(card) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 20,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "black",
                    padding: 15,
                    borderRadius: 50,
                  }}
                >
                  <MaterialIcons
                    name="call-received"
                    size={24}
                    color="#EAF984"
                  />
                </View>
                <View style={{ marginLeft: 20 }}>
                  <Text style={{ color: "black", fontSize: 20 }}>
                    {card.item.name}
                  </Text>
                  <Text style={{ color: "black" }}>{"May 7, 2023"}</Text>
                </View>
              </View>
              <Text style={{ color: "black" }}>{"+1,200"}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          style={{ height: 230 }}
        />
      </View>
    </View>
  );
}

export default Balance;

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
