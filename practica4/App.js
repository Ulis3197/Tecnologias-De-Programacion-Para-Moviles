import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CharactersScreen from "./src/screens/CharactersScreen";
import Constants from "expo-constants";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CharacterScreen from "./src/screens/CharacterScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Characters">
          <Stack.Screen name="Characters" component={CharactersScreen} />
          <Stack.Screen name="Character" component={CharacterScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272B33",
    paddingTop: Constants.statusBarHeight,
  },
});
