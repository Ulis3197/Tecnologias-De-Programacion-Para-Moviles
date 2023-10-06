import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { USER } from "../data/Images";
import { NUMBERS } from "../data/Numbers";
import ButtonNumber from "../components/ButtonNumber";
import { useAppContext } from "../hooks/useAppContext";
import IconTypeTheme from "../components/IconTypeTheme";

const Send = () => {
  const { isDarkMode, toggleTheme } = useAppContext();
  return (
    <View
      style={{
        paddingHorizontal: 20,
        backgroundColor: isDarkMode ? "black" : "white",
        flex: 1,
      }}
    >
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color={isDarkMode ? "white" : "black"}
        />
        <Text style={{ color: isDarkMode ? "white" : "black", fontSize: 20 }}>
          Send
        </Text>
        <IconTypeTheme />
      </View>
      <View style={styles.userInfo}>
        <Image
          source={USER}
          style={{ width: 70, height: 70, borderRadius: 50 }}
        />
      </View>
      <Text
        style={{
          fontSize: 25,
          color: isDarkMode ? "white" : "black",
          alignSelf: "center",
          marginTop: 10,
          fontWeight: "600",
        }}
      >
        Benjamin Parker
      </Text>
      <Text
        style={{
          fontSize: 17,
          color: "gray",
          alignSelf: "center",
          marginTop: 10,
          fontWeight: "600",
        }}
      >
        **** 3294
      </Text>
      <Text
        style={{
          color: isDarkMode ? "white" : "black",
          fontSize: 50,
          alignSelf: "center",
          marginTop: 10,
        }}
      >
        $340
        <Text
          style={{
            color: "gray",
          }}
        >
          .00
        </Text>
      </Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          paddingHorizontal: 20,
        }}
      >
        {NUMBERS.map((number, index) => {
          return <ButtonNumber data={number} key={index} />;
        })}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#EAF984",
          paddingVertical: 15,
          borderRadius: 30,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text style={{ fontSize: 25, fontWeight: "500" }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 10,
  },
  userInfo: {
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
