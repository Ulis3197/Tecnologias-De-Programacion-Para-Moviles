import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useAppContext } from "../hooks/useAppContext";

function SignUp({ navigation }) {
  const { name, password, email, handleName, handleEmail, handlePassword } =
    useAppContext();
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleNameInput = (text) => {
    setNameInput(text);
  };

  const handleEmailInput = (text) => {
    setEmailInput(text);
  };

  const handlePasswordInput = (text) => {
    setPasswordInput(text);
  };

  const onSubmit = () => {
    handleName(nameInput);
    handleEmail(emailInput);
    handlePassword(passwordInput);
    setNameInput("");
    setEmailInput("");
    setPasswordInput("");
    navigation.navigate("LogIn");
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={{ marginTop: 30 }}>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => navigation.navigate("LogIn")}
          />
        </View>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={{ marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Already have an account? </Text>
          <Text
            style={{ color: "orange", fontWeight: "bold" }}
            onPress={() => navigation.navigate("LogIn")}
          >
            LogIn
          </Text>
        </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontWeight: "bold" }}>Name</Text>
          <TextInput
            placeholder="Enter your name"
            style={styles.input}
            onChangeText={handleNameInput}
            value={nameInput}
          />
        </View>
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
        <TouchableOpacity style={styles.login} onPress={onSubmit}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

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
