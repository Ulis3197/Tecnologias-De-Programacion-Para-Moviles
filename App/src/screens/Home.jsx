import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header } from "@react-navigation/stack";

const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate("Login", { name: "Hola" })}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
