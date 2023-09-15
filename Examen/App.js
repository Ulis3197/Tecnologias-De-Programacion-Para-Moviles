import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/screens/Screen1';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Screen1></Screen1>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
});
