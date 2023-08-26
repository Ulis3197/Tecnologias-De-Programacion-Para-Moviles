import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {StyledText} from './src/components/StyledText';

export default function App() {
  return (
    <View style={styles.container}>
      <StyledText text={"San Rufus"} fontSize={40} fontWeight={'bold'}/>
      <StyledText text={"OSI OSI"} fontSize={20} color={'blue'}/>
      <TouchableOpacity style={styles.button} onPress={()=>console.log("Press")}>
        <Text>Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor:{
    color: '#fff',
    fontSize: 60,
  },
  button:{
    borderWidth: 3,
    padding: 5,
  }
});
