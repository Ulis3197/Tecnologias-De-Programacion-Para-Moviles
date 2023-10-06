import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useAuthContext } from "../hooks/useAuthContext";

const Account = () => {
  const navigation = useNavigation();
  const { handleLogOut: onLogOut } = useAuthContext();

  const handleLogOut = () => {
    try {
      onLogOut();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Account</Text>
      <Button title="Cerrar sesion" onPress={() => handleLogOut()} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
