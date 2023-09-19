import React from 'react'
import { StyleSheet, View } from 'react-native'
import StyledText from './StyledText';
import StyledButton from './StyledButton';

function ToDo({name, date}) {
  return (
    <View style={styles.ToDo}>
      <View>
        <StyledText text={name} fontWeight={"bold"} fontSize={18} />
        <StyledText text={date} fontSize={14} />
      </View>
      <View style={styles.buttonContainer}>
        <StyledButton text={"Editar"} />
        <StyledButton text={"Eliminar"} />
      </View>
    </View>
  );
}

export default ToDo

const styles = StyleSheet.create({
  ToDo: {
    flexDirection: "row",
    borderRadius: 20,
    backgroundColor: "white",
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
    gap: 10,
    height: 40,
  },
});