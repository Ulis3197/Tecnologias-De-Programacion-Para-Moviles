import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { Stack } from '../../App';
import { useAuthContext } from '../hooks/useAuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Constants from 'expo-constants';

const Layout = () => {
  const { user } = useAuthContext();

  if (!user) {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen name='Login' component={Login} />
          </Stack.Navigator>
          <StatusBar style='auto' />
        </View>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName={'Home'}>
          {/* {Layout()} */}
          {/* <Stack.Screen name='Login' component={Login} /> */}
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Account' component={Account} />
        </Stack.Navigator>
        <StatusBar style='auto' />
      </View>
    </NavigationContainer>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
