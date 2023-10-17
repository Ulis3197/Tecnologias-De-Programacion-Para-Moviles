import { createContext, useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

export const AuthContext = createContext({
  user: '',
});

import React from 'react';

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState('');

  const handleLogin = async (username, password) => {
    if (username === 'Uises' && password === '1') {
      try {
        await SecureStore.setItemAsync('user', username);
        setUser(username);
        return true;
      } catch (error) {
        console.log(error);
      }
    }
    return false;
  };

  const handleLogOut = async () => {
    try {
      setUser('');
      await SecureStore.deleteItemAsync('user');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        let result = await SecureStore.getItemAsync('user');
        if (result) {
          setUser(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const values = {
    user,
    handleLogin,
    handleLogOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
