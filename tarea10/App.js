import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./src/screens/Home";
import LogIn from "./src/screens/LogIn";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Store from "./src/screens/Store";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Home></Home>
    </View>
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName="Home"
    //     activeColor="#f0edf6"
    //     inactiveColor="#3e2465"
    //     barStyle={{ backgroundColor: "#694fad" }}
    //   >
    //     <Tab.Screen
    //       name="Feed"
    //       component={Home}
    //       options={{
    //         tabBarLabel: "Home",
    //         tabBarIcon: ({ color }) => (
    //           <MaterialCommunityIcons name="home" color={color} size={26} />
    //         ),
    //       }}
    //     />
    //     <Tab.Screen name="LogIn" component={LogIn} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
