import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";

function DrawerView({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.jumpTo("LogIn")} style={styles.button}>
        <Entypo name="log-out" size={24} color="black" />
        <Text style={{ color: "black", fontWeight: "bold" }}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DrawerView;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "red",
    borderRadius: 20,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
});
