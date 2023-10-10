
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import Home from "./src/screens/Home";
import LogIn from "./src/screens/LogIn";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "./src/screens/SignUp";
import AppContextProvider from "./src/context/AppContext";
import { createStackNavigator } from "@react-navigation/stack";
import Drawer from "./src/routes/Drawer";

const Main = createStackNavigator();

export default function App() {
  return (
    <AppContextProvider>
      <View style={styles.container}>
        <NavigationContainer>
          <Main.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Main.Screen name="Home" component={Home} />
            <Main.Screen name="LogIn" component={LogIn} />
            <Main.Screen name="SignUp" component={SignUp} />
            <Main.Screen name="Drawer" component={Drawer} />
          </Main.Navigator>
        </NavigationContainer>
      </View>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Constants.statusBarHeight,
  },
});
