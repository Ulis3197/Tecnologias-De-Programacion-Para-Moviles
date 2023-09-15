import React from 'react'
import { StyleSheet, Text, View} from "react-native";

function CustomText({ text, color, fontSize, fontWeight, paddingTop }) {
  return <Text style={{color, fontSize, fontWeight, paddingTop}}> {text} </Text>;
}

export default CustomText
