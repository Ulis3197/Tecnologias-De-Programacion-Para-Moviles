import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const { user } = useAuthContext();
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(true);

  const { handleLogin: onLogin } = useAuthContext();

  const handleLogin = () => {
    try {
      const loginValue = onLogin(username, password);
      if (loginValue) {
        navigation.navigate('Home');
        setPassword('');
        setUsername('');
      } else {
        Alert.alert('Error', 'Credenciales invalidas', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (!user) {
        setLoading(false);
      }
    }, 5000);
  }, []);

  return (
    <View style={{ gap: 10, padding: 10 }}>
      {loading ? (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <>
          <Text
            style={{ textAlign: 'center', fontSize: 20, fontWeight: '700' }}
          >
            Login
          </Text>
          <TextInput
            value={username}
            onChangeText={(e) => setUsername(e)}
            placeholder='Ingresa un usuario'
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
          />
          <TextInput
            value={password}
            onChangeText={(e) => setPassword(e)}
            placeholder='Ingresa una contraseña'
            style={{
              borderWidth: 1,
              borderRadius: 5,
              paddingVertical: 15,
              paddingHorizontal: 15,
            }}
            secureTextEntry
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              paddingVertical: 20,
            }}
            onPress={() => handleLogin()}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 20,
              }}
            >
              Iniciar sesion
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
