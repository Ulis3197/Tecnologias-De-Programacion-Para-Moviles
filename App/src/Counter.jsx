import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const incrementValue = () => dispatch(increment());
  const decrementValue = () => dispatch(decrement());
  const incrementByValue = (e) => dispatch(incrementByAmount(e));
  return (
    <>
      <Text style={{ fontSize: 40 }}>Counter value: {count}</Text>
      <TouchableOpacity onPress={incrementValue}>
        <Text>Increment by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrementValue}>
        <Text>Decrement by 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={incrementByValue(5)}>
        <Text>Increment by amount 5</Text>
      </TouchableOpacity>
    </>
  );
};

export default Counter;

const styles = StyleSheet.create({});
