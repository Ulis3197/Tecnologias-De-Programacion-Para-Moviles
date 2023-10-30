import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const Button = ({ text, rol, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(text)}>
      <Text
        style={[
          styles.text,
          rol === 'number' ? styles.numberContainer : styles.operatorContainer,
        ]}
      >
        {text === 'smile' ? (
          <FontAwesome5 name='smile-wink' size={24} color='green' />
        ) : (
          text
        )}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 65,
    height: 65,
    backgroundColor: '#eda34e',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberContainer: {
    color: 'black',
  },
  operatorContainer: {
    color: 'white',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
