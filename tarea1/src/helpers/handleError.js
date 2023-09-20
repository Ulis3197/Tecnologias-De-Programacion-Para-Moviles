import { Alert } from "react-native";

export const handleError = (error) => {
  Alert.alert("Error", error, [{ text: "Aceptar" }]);
};


