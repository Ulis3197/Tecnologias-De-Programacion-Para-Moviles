import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { StyledText } from "./src/components/StyledText";
import { StyledTouchable } from "./src/components/StyledTouchable";
import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(0);

  const aumentar = () => {
    setNum(num + 1);
  };

  const resetar = () => {
    setNum(num - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <View style={styles.container}>
      <StyledText
        text={"esta es la tarea 3"}
        fontSize={30}
        fontWeight={"bold"}
        color={"blue"}
        textDecorationLine={"none"}
        textTransform={"capitalize"}
        marginBottom={20}
      />
      <StyledText
        text={num}
        fontSize={30}
        fontWeight={"400"}
        color={"black"}
        textDecorationLine={"underline"}
        textTransform={"capitalize"}
        marginBottom={20}
      />

      <View style={styles.containerButton}>
        <StyledTouchable
          text={"-"}
          backgroundColor={"#db5e5e"}
          paddingHorizontal={20}
          paddingVertical={10}
          borderRadius={10}
          marginHorizontal={15}
          onPress={resetar}
        />
        <StyledTouchable
          text={"+"}
          backgroundColor={"#8ed497"}
          paddingHorizontal={20}
          paddingVertical={10}
          borderRadius={10}
          marginHorizontal={15}
          onPress={aumentar}
        />
      </View>

      <StyledTouchable
        text={"Reset"}
        backgroundColor={"#dddddd"}
        paddingHorizontal={20}
        paddingVertical={10}
        borderRadius={10}
        marginHorizontal={15}
        marginVertical={30}
        onPress={reset}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  containerButton: {
    flexDirection: "row",
  },
});
