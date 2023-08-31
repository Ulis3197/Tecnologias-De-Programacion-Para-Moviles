import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";
import Persona from "./src/components/Persona/Persona";

export default function App() {
  const { height, width } = Dimensions.get("screen");
  const data = [
    { id: 1, name: "Ulises", lastname: "Rojas", image:''},
    { id: 2, name: "Pablo", lastname: "Juarez", image:''},
    { id: 3, name: "Weso", lastname: "Reyes", image:''},
    { id: 4, name: "Diego", lastname: "Ruiz", image:''},
    { id: 5, name: "Alan", lastname: "gardy", image:''},
    { id: 6, name: "Ulises", lastname: "Rojas", image:''},
    { id: 7, name: "Pablo", lastname: "Juarez", image:''},
    { id: 8, name: "Weso", lastname: "Reyes", image:''},
    { id: 9, name: "Diego", lastname: "Ruiz", image:''},
    { id: 10, name: "Alan", lastname: "gardy", image:''},
  ];

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Persona id={item.id} name={item.name} lastname={item.lastname} />
        )}
        ItemSeparatorComponent={() => <Text> a </Text>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
