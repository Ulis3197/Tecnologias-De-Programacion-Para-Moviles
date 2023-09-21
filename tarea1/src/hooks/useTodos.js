import { useState } from "react";
import { handleError } from "../helpers/handleError";

export const useTodos = () => {
  const currentDate = new Date();
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [toDo, setToDo] = useState({
    id: "",
    name: "",
    date: "",
    done: false,
    dateDate: ""
  });

  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes()

  const handleAddTodo = () => {
    if (input === "") return handleError("Ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) return handleError("Ya existe una tarea con ese nombre");

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: input,
        date:
          "Creado: " + `${day}/${month}/${year}` + " " + `${hours}:${minutes}`,
        done: false,
        dateDate: "",
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
    });

    setTodos(completedTodo);
  };

  const handleEditTodo = (id) => {
    todos.map((todo) => {
      if (todo.id === id) {
        setInput(todo.name);
        setEdit(true);
        setUpdate(id);
      }
    });
  };

  const handleUpdateTodo = () => {
    if (input === "") return handleError("Ingresar un nombre a la tarea");

    const existingTodo = todos.some(
      (todo) => todo.name.toLowerCase() === input.toLowerCase()
    );

    if (existingTodo) return handleError("Ya existe una tarea con ese nombre");

    const updatedTodo = todos.map((todo) => {
      if (todo.id === update) {
        return {
          ...todo,
          name: input,
          dateDate:
            "Actualizado: " +
            `${day}/${month}/${year}` +
            " " +
            `${hours}:${minutes}`,
        };
      }
      return todo;
    });

    setTodos(updatedTodo);
    setInput("");
    setEdit(false);
    setUpdate("");
  };

  const handleViewTodo = (item) => {
    setModalVisible(!modalVisible);
    setToDo(item);
  }

  return {
    input,
    todos,
    edit,
    modalVisible,
    toDo,
    setToDo,
    setModalVisible,
    setInput,
    handleAddTodo,
    handleDeleteTodo,
    handleDoneTodo,
    handleEditTodo,
    handleUpdateTodo,
    handleViewTodo,
  };
};
