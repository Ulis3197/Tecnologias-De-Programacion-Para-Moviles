import React from 'react'
import { View, StyleSheet} from 'react-native'
import CustomImage from "../components/CustomImage";
import CustomText from "../components/CustomText";

function Card({ text1, text2 }) {
  return (
    <View style={styles.container}>
      <CustomImage></CustomImage>
      <View>
        <CustomText text={text1}></CustomText>
        <CustomText text={text2}></CustomText>
      </View>
    </View>
  );
}

export default Card

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center",
    paddingTop: 20
  },
});