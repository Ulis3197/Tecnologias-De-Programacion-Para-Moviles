import React from 'react'
import { Text } from 'react-native'

function StyledText({text, fontSize, color,fontWeight, paddingVertical}) {
  return <Text style={{ fontSize, color, fontWeight, paddingVertical }}>{text}</Text>;
}

export default StyledText