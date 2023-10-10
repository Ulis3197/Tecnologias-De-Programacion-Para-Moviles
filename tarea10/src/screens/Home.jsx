import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { COSAS } from "../data/img";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={COSAS}
        style={{ width: 350, height: 350, borderRadius: 20 }}
      />
      <View style={{ marginTop: 30, alignItems: "center" }}>
        <Text style={styles.text}>Shopping with the best </Text>
        <Text style={styles.text}>e-commerce store </Text>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Text style={styles.text2}>Find the best shopping experience with</Text>
        <Text style={styles.text2}>us by your favourite daily needs!</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{"Get Started"}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 80,
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  text2: {
    fontSize: 14,
    color: "gray",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#21B2B2",
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
