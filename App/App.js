import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthContextProvider from "./src/context/authContext";
import Account from "./src/screens/Account";
import { useAuthContext } from "./src/hooks/useAuthContext";
import { Layout } from "./src/layout/Layout";

export const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}
