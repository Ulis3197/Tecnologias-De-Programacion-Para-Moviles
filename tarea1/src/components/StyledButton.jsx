import React from 'react'
import { TouchableOpacity, StyleSheet } from "react-native";
import StyledText from './StyledText'

function StyledButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <StyledText text={text} fontWeight={"bold"} color={"white"} />
    </TouchableOpacity>
  );
}

export default StyledButton

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#439eff",
  },
});