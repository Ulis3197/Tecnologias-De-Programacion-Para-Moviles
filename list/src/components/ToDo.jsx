import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

function ToDo({ name }) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        justifyContent: "space-between",
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
    >
      <Text>{name}</Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <CustomButton text="Edit" />
        <CustomButton text="Delete" />
      </View>
    </View>
  );
}

export default ToDo;
