import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (text) => {
    setName(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  const values = {
    name,
    password,
    email,
    handleName,
    handleEmail,
    handlePassword,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
