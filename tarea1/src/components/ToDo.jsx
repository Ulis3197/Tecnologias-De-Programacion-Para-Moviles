import React from "react";
import { StyleSheet, View } from "react-native";
import StyledText from "./StyledText";
import StyledButton from "./StyledButton";
import Icons from "./Icons";

function ToDo({ name, date, done, update, onPressDone, onPressEdit, onPressDelete }) {
  return (
    <View style={[styles.ToDo, done ? styles.done : styles.notDone]}>
      <View style={{ justifyContent: "center" }}>
        <StyledText
          text={name}
          fontWeight={"bold"}
          fontSize={18}
          paddingVertical={5}
        />
        <StyledText text={date} fontSize={10} />
      </View>
      <View style={{ justifyContent: "center" }}>
        <View style={styles.buttonContainer}>
          <Icons
            iconType={"MaterialIcons"}
            name={done ? "cancel" : "done"}
            size={28}
            color={done ? "red" : "green"}
            onPress={onPressDone}
          />
          <Icons
            iconType={"MaterialIcons"}
            name={"mode-edit"}
            size={28}
            color={"#f7dd72"}
            onPress={onPressEdit}
          />
          <Icons
            iconType={"MaterialIcons"}
            name={"delete"}
            size={28}
            color={"red"}
            onPress={onPressDelete}
          />
        </View>
        <View>
          <StyledText text={update} fontSize={10} />
        </View>
      </View>
    </View>
  );
}

export default ToDo;

const styles = StyleSheet.create({
  ToDo: {
    flexDirection: "row",
    borderRadius: 20,
    height: 80,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ecebf2",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 5,
  },
  done: {
    backgroundColor: "#b7e0a6",
  },
  notDone: {
    backgroundColor: "#9dcbf2",
  },
});
