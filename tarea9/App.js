import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from "./src/screens/Welcome";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Constants from "expo-constants";
import { useState } from 'react';

export default function App() {
    const [screen, setScreen] = useState(1);

    onClickScreen1 = () => {
      setScreen(1);
    };

    onClickScreen2 = () => {
      setScreen(2);
    };

    onClickScreen3 = () => {
      setScreen(3);
    };



  return (
    <View style={styles.container}>
      {screen === 1 ? (
        <Welcome onPress2={onClickScreen2} onPress3={onClickScreen3} />
      ) : screen === 2 ? (
        <SignIn onPress={onClickScreen1} />
      ) : (
        <SignUp onPress={onClickScreen1} />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : Constants.statusBarHeight,
  },
});
