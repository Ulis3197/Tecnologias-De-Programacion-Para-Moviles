import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

function ToDo({ id, name, isCompleted, handleDelete, handleComplete }) {
  return (
    <View style={[styles.container, isCompleted && styles.todoCompleted]}>
      <Text style={[{ fontSize: 20 }, isCompleted && styles.textCompleted]}>
        {name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <CustomButton text="Edit" />
        <CustomButton text="Delete" onPress={() => handleDelete(id)} />

        <CustomButton
          text={isCompleted ? "Done" : "Complete"}
          onPress={() => handleComplete(id)}
        />
      </View>
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#c7f9cc",
    borderRadius: 5,
    alignItems: "center",
  },
  todoCompleted: {
    backgroundColor: "orange",
  },
  textCompleted: {
    textDecorationLine: "line-through",
  },
});
