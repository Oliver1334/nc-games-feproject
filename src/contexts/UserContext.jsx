import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  
  const login = (userData) => {
    setUser(userData); // Set the user data
    setIsLoggedIn(true); // Update login status
  };

  
  const logout = () => {
    setUser({}); // Clear user data
    setIsLoggedIn(false); // Update login status
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, logout, isLoggedIn }} 
    >
      {children}
    </UserContext.Provider>
  );
};
