import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import { AntDesign } from "@expo/vector-icons";

function FilterItem({text}) {
  return (
    <View style={styles.itemContainer}>
      <StyledText text={text} color={"#B2B2B2"} />
      <AntDesign name="close" size={16} color="#B2B2B2" />
    </View>
  );
}

export default FilterItem

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    height: 50,
    width: 110,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: "space-between",
  },
});