import React from 'react'
import { Text } from 'react-native'

function StyledText({text, color, fontSize, fontWeight, paddingVertical, paddingHorizontal, marginVertical, marginHorizontal, textAlign}) {
  return (
    <Text style={{
        color: color,
        fontSize: fontSize,
        fontWeight: fontWeight,
        paddingVertical: paddingVertical,
        paddingHorizontal: paddingHorizontal,
        marginVertical: marginVertical,
        marginHorizontal: marginHorizontal,
        textAlign: textAlign
    }}>
        {text}
    </Text>
  )
}

export default StyledText