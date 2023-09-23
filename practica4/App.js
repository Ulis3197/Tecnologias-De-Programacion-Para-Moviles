import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CharactersScreen from "./src/screens/CharactersScreen";
import Constants from "expo-constants";

export default function App() {
  return (
    <View style={styles.container}>
      <CharactersScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272B33",
    paddingTop: Constants.statusBarHeight,
  },
});
