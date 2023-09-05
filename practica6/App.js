import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar as Status2 } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Ionicons name="notifications" size={24} color="black" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    paddingTop : Constants.statusBarHeight
  },
});

