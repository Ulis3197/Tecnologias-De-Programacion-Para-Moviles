import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Send from "./src/screens/Send";
import Balance from "./src/screens/Balance";
import MyCards from "./src/screens/MyCards";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AppContextProvider from "./src/context/AppContext";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Balance"
            barStyle={{ height: 70, backgroundColor: "#000" }}
            activeColor="#fff"
            inactiveColor="#3e2465"
            labeled={true}
            shifting={true}
            backBehavior="history"
          >
            <Tab.Screen
              name="MyCards"
              component={MyCards}
              options={{
                tabBarLabel: "My Cards",
                tabBarIcon: ({ color }) => (
                  <AntDesign name="creditcard" size={24} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Balance"
              component={Balance}
              options={{
                tabBarLabel: "Balance",
                tabBarIcon: ({ color }) => (
                  <MaterialIcons
                    name="account-balance"
                    size={24}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Send"
              component={Send}
              options={{
                tabBarLabel: "Send",
                tabBarIcon: ({ color }) => (
                  <Feather name="send" size={24} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
