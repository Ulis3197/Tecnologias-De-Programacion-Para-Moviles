import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CustomButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderRadious: 5,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        fontWeight: 'bold',
      }}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
