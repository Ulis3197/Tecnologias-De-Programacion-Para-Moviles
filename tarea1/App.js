import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Constants from "expo-constants";
import StyledText from "./src/components/StyledText";
import Icons from "./src/components/Icons";
import StyledButton from "./src/components/StyledButton";
import ToDo from "./src/components/ToDo";
import { useState } from "react";

export default function App() {
  const currentDate = new Date();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const handleError = (error) => {
    Alert.alert("Error", error, [{ text: "Aceptar" }]);
  };

  const handleAddTodo = () => {
    if (input === "")
      return handleError("Ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo)
      return handleError("Ya existe una tarea con ese nombre");

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: input,
        date: `${day}/${month}/${year}`,
        done: false,
      },
    ]);
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleDoneTodo = (id) => {
    const completedTodo = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    })

    setTodos(completedTodo);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <StyledText text={"Hoy"} fontSize={35} fontWeight={"bold"} />
        <Icons iconType={"Feather"} name="calendar" size={24} color="#b2b7c2" />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe una Tarea"
          placeholderTextColor={"#757575"}
          value={input}
          onChangeText={(value) => setInput(value)}
        />
        <StyledButton text="Añadir" onPress={handleAddTodo} />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDo
              name={item.name}
              date={item.date}
              done={item.done}
              onPressDelete={() => handleDeleteTodo(item.id)}
              onPressDone={() => handleDoneTodo(item.id)}
            />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ebecf0",
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 20,
    paddingHorizontal: 20,
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 20,
    flex: 1,
    borderRadius: 5,
    height: 40,
    backgroundColor: "white",
  },
  listContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});
