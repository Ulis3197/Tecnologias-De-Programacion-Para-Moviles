import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './src/screens/Screen1';
import Constants from 'expo-constants';

const DATA = [
  {
    id: 1,
    numeral: "#PotableFM",
    text: "Divoom Radio",
    price: "$52.00",
    img: "https://png.pngtree.com/png-clipart/20220502/original/pngtree-the-old-radio-vintage-retro-unique-png-image_7648857.png",
  },
  {
    id: 2,
    numeral: "#SmallestFM",
    text: "Manual Radio",
    price: "$48.32",
    img: "https://png.pngtree.com/png-clipart/20220502/original/pngtree-the-old-radio-vintage-retro-unique-png-image_7648857.png",
  },
  {
    id: 3,
    numeral: "#BichoFM",
    text: "Bicho Radio",
    price: "$95.67",
    img: "https://png.pngtree.com/png-clipart/20220502/original/pngtree-the-old-radio-vintage-retro-unique-png-image_7648857.png",
  },
  {
    id: 4,
    numeral: "#MessiFM",
    text: "Messi Radio",
    price: "$99.99",
    img: "https://png.pngtree.com/png-clipart/20220502/original/pngtree-the-old-radio-vintage-retro-unique-png-image_7648857.png",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1 data={DATA}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingTop: Constants.statusBarHeight,
  },
});
