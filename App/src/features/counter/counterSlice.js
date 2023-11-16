import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  edit: {
    id: '',
    isEdit: false,
  },
  name: '',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    cambiar: (state, action) => {
      state.name = action.payload;
    },
    add: (state, action) => {
      state.todos = [
        ...state.todos,
        {
          id: new Date().toISOString(),
          name: action.payload,
          completed: false,
          createAt: `${new Date().getDate()}/${
            new Date().getMonth() + 1
          }/${new Date().getFullYear()}`,
          updatedAt: '',
        },
      ];
    },
    borrar: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    complete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    edit: (state, action) => {
      state.edit = {
        isEdit: !state.edit.isEdit,
        id: action.payload,
      };
      state.name = state.todos.find((todo) => todo.id === action.payload).name;
      console.log(state.edit);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === state.edit.id) {
          return {
            ...todo,
            name: action.payload,
            updatedAt: `${new Date().getDate()}/${
              new Date().getMonth() + 1
            }/${new Date().getFullYear()}`,
          };
        }
      });
      state.edit = {
        id: '',
        isEdit: false,
      };
      state.name = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, complete, edit, editTodo, borrar, cambiar } =
  counterSlice.actions;

export default counterSlice.reducer;
