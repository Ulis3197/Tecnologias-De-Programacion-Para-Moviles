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
    width: 85,
    height: 85,
    backgroundColor: '#f1f1ed',
    borderWidth: 3,
    borderRadius: 50,
    borderColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  numberContainer: {
    color: 'black',
  },
  operatorContainer: {
    color: '#ed4545',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
