import { StatusBar } from "expo-status-bar";
import { Alert, FlatList, TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "./src/components/CustomButton";
import ToDo from "./src/components/ToDo";
import { useState } from "react";

// const TODOS=[
//   {id: 1, name: 'Mua bim bim', completed: false},
// ]

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    const handleShowError = (error) =>
      Alert.alert("Error", error, [
        {
          text: "Aceptar",
        },
      ]);

    if (input === "")
      return handleShowError("Debes ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) {
      return handleShowError("Ya existe una tarea con ese nombre");
    }

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: input,
        completed: false,
      },
    ]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    // const filteredArray = todos.filter((todo) => todo.id !== id);
    setTodos(() => todos.filter((todo) => todo.id !== id));
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={{ backgroundColor: "#38a3a5", borderRadius: 10 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            To Do List
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              flex: 1,
              borderRadius: 5,
              height: 40,
              borderColor: "#219ebc",
              backgroundColor: "#57cc99",
            }}
            placeholder="Enter your task..."
            value={input}
            onChangeText={(value) => setInput(value)}
          />
          <CustomButton text="Add" onPress={handleAddTodo} />
        </View>
      </View>
      <FlatList
        data={todos}
        renderItem={({ item: { id, name, completed } }) => (
          <ToDo
            name={name}
            id={id}
            isCompleted={completed}
            handleDelete={handleDeleteTodo}
            handleComplete={handleCompleteTodo}
          />
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22577a",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
