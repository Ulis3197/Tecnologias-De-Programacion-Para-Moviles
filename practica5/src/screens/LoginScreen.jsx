import React from "react";
import { Button, Text } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <>
      <Text>Login</Text>
      <Button
        onPress={() => navigation.navigate("Home", { nombre: "Ulises" })}
        title="Go to Home"
      ></Button>
    </>
  );
}

export default LoginScreen;
