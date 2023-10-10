import React, { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FONDOLOGIN } from "../data/img";
import { useAppContext } from "../hooks/useAppContext";

function LogIn({ navigation }) {
  const { name, password, email, handleName, handleEmail, handlePassword } =
    useAppContext();
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleEmailInput = (text) => {
    setEmailInput(text);
  };

  const handlePasswordInput = (text) => {
    setPasswordInput(text);
  };

  const showAlert = (title, msg) =>
    Alert.alert(title, msg, [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancelar"),
        style: "cancel",
      },
      { text: "Confirmar", onPress: () => console.log("confirmar") },
    ]);

  const onSubmit = () => {
    if (emailInput === "" && passwordInput === "") {
      const title = "Campos vacios";
      const msg = "Por favor ingresa tus datos";
      showAlert(title, msg);
      return;
    }
    if (emailInput === email && passwordInput === password) {
      setEmailInput("");
      setPasswordInput("");
      navigation.navigate("Drawer");
    } else {
      const title = "Credenciales incorrectas";
      const msg = "Por favor ingresa tus datos correctamente";
      showAlert(title, msg);
      return;
    }
  };

  return (
    <View>
      <Image source={FONDOLOGIN} style={{ width: "100%", height: 250 }} />
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "bold" }}>Email</Text>
          <TextInput
            placeholder="Enter your email"
            style={styles.input}
            onChangeText={handleEmailInput}
            value={emailInput}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "bold" }}>Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={true}
            style={styles.input}
            onChangeText={handlePasswordInput}
            value={passwordInput}
          />
        </View>
        <Text
          style={{
            color: "orange",
            alignSelf: "flex-end",
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Forgot Password?
        </Text>
        <TouchableOpacity style={styles.login} onPress={onSubmit}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            LogIn
          </Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Don´t have an account? </Text>
          <Text
            style={{ color: "orange", fontWeight: "bold" }}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
  },
  login: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
  },
});
