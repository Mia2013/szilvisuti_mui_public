import React, { createContext, useContext, useState } from 'react';
import jwt_decode from "jwt-decode";

export const getDataFromToken = (token) => {
  return jwt_decode(token);
};

export const LoggedInUserContext = createContext({});

export const useLoggedInUserContext = () => useContext(LoggedInUserContext);

export default function LoggedInUserContextProvider({ children }) {
  const storedJwt = localStorage.getItem('szilviAdmin');
  const [loggedInUser, setLoggedInUser] = useState(storedJwt ? storedJwt : "");
  return (
    <LoggedInUserContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,

      }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
}
