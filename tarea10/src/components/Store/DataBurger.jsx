import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BURGER } from "../../data/img";

function DataBurger({ item }) {
  return (
    <View style={styles.container}>
      <Image
        source={BURGER}
        style={{ width: 220, height: 220, borderRadius: 20 }}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#21B2B2",
          marginTop: 10,
        }}
      >
        {item.price}
      </Text>
    </View>
  );
}

export default DataBurger;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#21B2B2",
    borderRadius: 25,
    padding: 20,
  },
});
