import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import { FontAwesome } from "@expo/vector-icons";

function Card({ numeral, text, price, img }) {
  return (
    <View style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={{ uri: img }} style={styles.img} />
      </View>
      <View style={{gap:10, paddingTop:20}}>
        <StyledText text={numeral} color={"#868686"} fontSize={20} />
        <StyledText text={text} color={"black"} fontSize={20} fontWeight={"bold"}/>
        <View style={styles.textCoin}>
          <View style={styles.coin}>
            <FontAwesome name="dollar" size={24} color="black" />
          </View>
          <StyledText text={price} color={"black"} fontSize={20} fontWeight={"bold"}/>
        </View>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#EBEBEB",
    borderRadius: 20,
    marginRight: 20,
  },
  img: {
    width: 200,
    height: 200,
  },
  coin: {
    borderRadius: 50,
    backgroundColor: "#FF9F00",
    borderWidth: 1,
    borderColor: "#FF9F00",
    height: 30,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  textCoin: {
    flexDirection: "row",
  },
});
