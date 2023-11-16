import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  add,
  borrar,
  complete,
  edit,
  editTodo,
  cambiar,
} from './features/counter/counterSlice';
import CustomButton from './components/CustomButton';
import ToDo from './components/ToDo';

const Counter = () => {
  const todo = useSelector((state) => state.counter.todos);
  const editar = useSelector((state) => state.counter.edit);
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    dispatch(add(name));
    handleChangeName('');
  };
  const handleDeleteTodo = (e) => dispatch(borrar(e));
  const handleCompleteTodo = (e) => dispatch(complete(e));
  const handleEdit = (e) => dispatch(edit(e));
  const handleEditTodo = (e) => {
    dispatch(editTodo(name));
    handleChangeName('');
  };
  const handleChangeName = (e) => dispatch(cambiar(e));
  return (
    <>
      <View>
        <View style={{ flexDirection: 'row', marginTop: 20, gap: 20 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              flex: 1,
              borderRadius: 5,
              height: 40,
            }}
            placeholder='Add todo'
            value={name}
            onChangeText={(value) => handleChangeName(value)}
          />
          {editar.isEdit ? (
            <CustomButton text='Edit' onPress={handleEditTodo} />
          ) : (
            <CustomButton text='Add' onPress={handleAddTodo} />
          )}
        </View>
      </View>
      <FlatList
        data={todo}
        renderItem={({
          item: { id, name, completed, createAt, updatedAt },
        }) => (
          <ToDo
            name={name}
            id={id}
            createAt={createAt}
            updatedAt={updatedAt}
            isCompleted={completed}
            isEdit={handleEdit}
            handleDelete={handleDeleteTodo}
            handleComplete={handleCompleteTodo}
          />
        )}
      />
    </>
  );
};

export default Counter;

const styles = StyleSheet.create({});
