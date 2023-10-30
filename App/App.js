import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "./src/components/Button";
import { useReducer } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
};

const initialState = {
  displayNumber: 0,
  operator: "",
  currentNumber: 0,
  previousNumber: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      return {
        ...state,
        currentNumber: action.payload,
        displayNumber: state.currentNumber,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
      };

    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = state.previousNumber * state.currentNumber;
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };
        case "-":
          result = state.previousNumber - state.currentNumber;
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };
        case "+":
          result =
            parseInt(state.previousNumber) + parseInt(state.currentNumber);
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };
        case "/":
          result = state.previousNumber / state.currentNumber;
          return {
            ...state,
            displayNumber: result,
            currentNumber: result,
          };

        default:
          break;
      }
    // return {
    //   ...state,
    //   operator: "",
    //   displayNumber: state.previousNumber +
    // }
    default:
      break;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSelectNumber = (number) => {
    dispatch({ type: "SELECT_NUMBER", payload: number });
  };

  const handleSelectOperator = (operator) => {
    dispatch({ type: "SELECT_OPERATOR", payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button text={"9"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"8"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"7"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"+"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"6"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"5"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"4"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"-"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"3"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"2"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"1"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"*"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"-"} rol={"operator"} onPress={handleSelectOperator} />
        <Button text={"0"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"/"} rol={"operator"} onPress={handleSelectOperator} />
        <Button text={"="} rol={"operator"} onPress={handleCalculate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});
