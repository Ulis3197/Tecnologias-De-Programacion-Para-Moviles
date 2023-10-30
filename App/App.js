import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import Button from "./src/components/Button";
import { useReducer, useState } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
  CLEAN: "CLEAN",
  NEGATIVE: "NEGATIVE",
};

const initialState = {
  displayNumber: 0,
  operator: "",
  currentNumber: 0,
  previousNumber: 0,
  operation: "",
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      if (action.payload === "00") {
        return {
          ...state,
          currentNumber: state.currentNumber * 100,
          displayNumber: state.currentNumber * 100,
        };
      }
      if (state.currentNumber !== 0) {
        return {
          ...state,
          currentNumber: state.currentNumber + action.payload,
          displayNumber: state.displayNumber + action.payload,
        };
      }
      if (state.operator !== "" && state.operation === "") {
        return {
          ...state,
          currentNumber: action.payload,
          displayNumber: state.displayNumber + action.payload,
        };
      }
      return {
        ...state,
        currentNumber: action.payload,
        displayNumber: action.payload,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        operator: action.payload,
        previousNumber: state.currentNumber,
        currentNumber: 0,
        operation: state.displayNumber + action.payload,
        displayNumber: 0,
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "x":
          result = state.previousNumber * state.currentNumber;
          break;
        case "-":
          result =
            parseInt(state.previousNumber) - parseInt(state.currentNumber);
          break;
        case "+":
          result =
            parseInt(state.previousNumber) + parseInt(state.currentNumber);
          break;
        case "/":
          result = state.previousNumber / state.currentNumber;
          break;
        case "%":
          result = state.previousNumber % state.currentNumber;
          break;
        default:
          return {
            ...state,
            operator: "",
          };
          break;
      }
      return {
        ...state,
        displayNumber: result,
        currentNumber: result,
        operation: "",
      };
    case CALCULATOR_TYPES.CLEAN:
      return {
        displayNumber: 0,
        operator: "",
        currentNumber: 0,
        previousNumber: 0,
        operation: "",
      };
    case CALCULATOR_TYPES.NEGATIVE: {
      return {
        ...state,
        currentNumber: state.currentNumber * -1,
        displayNumber: state.currentNumber * -1,
      };
    }
    default:
      break;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [smile, setSmile] = useState(false);
  const handleSelectNumber = (number) => {
    dispatch({ type: "SELECT_NUMBER", payload: number });
  };

  const handleSelectOperator = (operator) => {
    dispatch({ type: "SELECT_OPERATOR", payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: "CALCULATE" });
  };

  const handleClean = () => {
    dispatch({ type: "CLEAN" });
  };

  const handleNegativePositive = () => {
    dispatch({ type: "NEGATIVE" });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.operation} </Text>
      <Text style={styles.text}>{state.displayNumber} </Text>
      <View style={styles.row}>
        <Button text={"C"} rol={"operator"} onPress={handleClean} />
        <Button
          text={"+/-"}
          rol={"operator"}
          onPress={handleNegativePositive}
        />
        <Button text={"%"} rol={"operator"} onPress={handleSelectOperator} />
        <Button text={"/"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"1"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"2"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"3"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"x"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"4"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"5"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"6"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"-"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"7"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"8"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"9"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"+"} rol={"operator"} onPress={handleSelectOperator} />
      </View>
      <View style={styles.row}>
        <Button text={"0"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"00"} rol={"number"} onPress={handleSelectNumber} />
        <Button text={"000"} rol={"number"} onPress={() => {}} />
        <Button text={"="} rol={"operator"} onPress={handleCalculate} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1ed",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 2,
    paddingTop: Constants.statusBarHeight,
    paddingVertical: 20,
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    gap: 30,
    marginTop: 10,
  },
  text: {
    fontSize: 100,
    fontWeight: "bold",
  },
});
