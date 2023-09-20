import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText';
import StyledButton from './StyledButton';
import Icons from './Icons';

function ToDo({ name, date, done, onPressDelete, onPressDone }) {
  return (
    <View style={[styles.ToDo, done ? styles.done : styles.notDone]}>
      <View>
        <StyledText text={name} fontWeight={"bold"} fontSize={18} />
        <StyledText text={date} fontSize={14} />
      </View>
      <View style={styles.buttonContainer}>
        <Icons
          iconType={"MaterialIcons"}
          name={done ? "cancel" : "done"}
          size={24}
          color={done ? "red" : "green"}
          onPress={onPressDone}
        />
        <Icons
          iconType={"MaterialIcons"}
          name={"mode-edit"}
          size={24}
          color={"#f7dd72"}
          // onPress={onPressDone}
        />
        <Icons
          iconType={"MaterialIcons"}
          name={"delete"}
          size={24}
          color={"red"}
          onPress={onPressDelete}
        />
      </View>
    </View>
  );
}

export default ToDo

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
    height: 40,
    justifyContent: "space-between",
    alignItems: "center",
  },
  done: {
    backgroundColor: "#b7e0a6",
  },
  notDone: {
    backgroundColor: "#9dcbf2",
  },
});