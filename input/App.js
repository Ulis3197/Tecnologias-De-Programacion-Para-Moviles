import { StyleSheet, View, Dimensions, FlatList, Text } from "react-native";
import Persona from "./src/components/Persona/Persona";
import Login from "./src/screens/Login";

export default function App() {
  const { height, width } = Dimensions.get("screen");
  const data = [
    {
      id: 1,
      name: "Ulises",
      lastname: "Rojas",
      image: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
    },
    {
      id: 2,
      name: "Pablo",
      lastname: "Juarez",
      image: "https://cdn-icons-png.flaticon.com/512/5521/5521371.png",
    },
    {
      id: 3,
      name: "Weso",
      lastname: "Reyes",
      image: "https://cdn-icons-png.flaticon.com/512/3445/3445053.png",
    },
    {
      id: 4,
      name: "Diego",
      lastname: "Ruiz",
      image: "https://cdn-icons-png.flaticon.com/512/3445/3445053.png",
    },
    {
      id: 5,
      name: "Alano",
      lastname: "Gardy",
      image: "https://cdn-icons-png.flaticon.com/512/7013/7013649.png",
    },
    {
      id: 6,
      name: "Ulises2",
      lastname: "Ferreyra",
      image: "https://cdn-icons-png.flaticon.com/512/5231/5231019.png",
    },
    {
      id: 7,
      name: "Pablo2",
      lastname: "Castillo",
      image: "https://cdn-icons-png.flaticon.com/512/5521/5521371.png",
    },
    {
      id: 8,
      name: "Weso2",
      lastname: "Reyes",
      image: "https://cdn-icons-png.flaticon.com/512/3445/3445053.png",
    },
    {
      id: 9,
      name: "Diego2",
      lastname: "Ayala",
      image: "https://cdn-icons-png.flaticon.com/512/3445/3445053.png",
    },
    {
      id: 10,
      name: "Alan2",
      lastname: "Gardyx2",
      image: "https://cdn-icons-png.flaticon.com/512/7013/7013649.png",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Persona id={item.id} name={item.name} lastname={item.lastname} image={item.image}/>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 50,
    marginHorizontal: 20,
  },
  separator:{
    marginVertical: 5,
  }
});
