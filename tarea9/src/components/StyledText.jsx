import React from 'react'
import { Text } from 'react-native'

export default function StyledText({text, fontSize, color, fontWeight}) {
  return (
    <Text style={{fontSize, color, fontWeight}}>{text}</Text>
  )
}