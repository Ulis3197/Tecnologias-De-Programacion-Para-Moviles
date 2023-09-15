import React from 'react'
import { View } from 'react-native'
import CustomImage from "../components/CustomImage";
import CustomText from "../components/CustomText";

function Stories({text}) {
  return (
    <View>
      <CustomImage></CustomImage>
      <CustomText text={text}></CustomText>
    </View>
  );
}

export default Stories