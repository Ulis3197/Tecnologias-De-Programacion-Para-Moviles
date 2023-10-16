import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Account from "../screens/Account";
import { Stack } from "../../App";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAuthContext } from "../hooks/useAuthContext";
import Constants from "expo-constants";

export const Layout = () => {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <>
        <NavigationContainer>
          <View style={styles.container}>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
            <StatusBar style="auto" />
          </View>
        </NavigationContainer>
      </>
    );
  }

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Account" component={Account} />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
