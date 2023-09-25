import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Router() {
  return <NavigationContainer></NavigationContainer>;
}

export default Router;
