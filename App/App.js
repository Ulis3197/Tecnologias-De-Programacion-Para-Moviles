import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { Provider, useSelector } from "react-redux";
import { store } from "./src/store";
import Counter2 from "./src/Counter2";


export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter2 />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight,
  },
});
