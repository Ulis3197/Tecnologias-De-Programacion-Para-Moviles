import { StatusBar } from "expo-status-bar";
import { FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import ToDo from "./src/components/ToDo";
import { useState } from "react";

// const TODOS=[
//   {id: 1, name: 'Mua bim bim', completed: false},
// ]

export default function App() {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if(input === "") return
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        name: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 40, fontWeight: "bold", textAlign: "center" }}>
          To Do List
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              flex: 1,
              borderRadius: 5,
              height: 40,
            }}
            value={input}
            onChangeText={(value) => setInput(value)}
          />
          <CustomButton text="Add" onPress={handleAddTodo}/>
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <ToDo name={item.name}/>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
