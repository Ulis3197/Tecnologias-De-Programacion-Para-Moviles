import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Counter from './src/Counter';

// const TODOS=[
//   {id: 1, name: 'Mua bim bim', completed: false},
// ]

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState([{ id: '', isEdit: false }]);

  const handleShowError = (error) =>
    Alert.alert('Error', error, [
      {
        text: 'Aceptar',
      },
    ]);
  const handleAddTodo = () => {
    if (input === '')
      return handleShowError('Debes ingresar un nombre a la tarea');

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) {
      return handleShowError('Ya existe una tarea con ese nombre');
    }

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: input,
        completed: false,
        createAt: `${new Date().getDate()}/${
          new Date().getMonth() + 1
        }/${new Date().getFullYear()}`,
        updatedAt: '',
      },
    ]);
    setInput('');
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
  };

  const handleEdit = (id) => {
    setEdit({ isEdit: !edit.isEdit, id: id });
    if (!edit.isEdit) {
      setInput(todos.find((todo) => todo.id === id).name);
    } else {
      setInput('');
    }
  };

  const handleEditTodo = () => {
    if (input === '')
      return handleShowError('Debes ingresar un nombre a la tarea');

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) {
      return handleShowError('Ya existe una tarea con ese nombre');
    }

    const updatedTodos = todos.map((todo) => {
      if (todo.id === edit.id) {
        return {
          ...todo,
          name: input,
          updatedAt: `${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
        };
      }
      return todo;
    });

    setTodos(updatedTodos);
    setInput('');
    setEdit({ isEdit: !edit.isEdit, id: '' });
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
        <StatusBar style='auto' />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
