import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Izquierda from "./src/screens/Izquierda";
import Medio from "./src/screens/Medio";
import Derecha from "./src/screens/Derecha";
import { Entypo } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Izquierda"
          barStyle={{ height: 70, backgroundColor: "#1F1D2B" }}
          activeColor="#fff"
          inactiveColor="#fff"
          labeled={true}
          shifting={true}
          backBehavior="history"
        >
          <Tab.Screen
            name="Izquierda"
            component={Izquierda}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Entypo name="home" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Medio"
            component={Medio}
            options={{
              tabBarLabel: "Explore",
              tabBarIcon: ({ color }) => (
                <Entypo name="menu" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Derecha"
            component={Derecha}
            options={{
              tabBarLabel: "Favorites",
              tabBarIcon: ({ color }) => (
                <Entypo name="heart" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
