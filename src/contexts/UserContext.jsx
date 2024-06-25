import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // Function to handle login
  const login = (userData) => {
    setUser(userData); // Set the user data
    setIsLoggedIn(true); // Update login status
  };

  // Function to handle logout
  const logout = () => {
    setUser({}); // Clear user data
    setIsLoggedIn(false); // Update login status
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, logout, isLoggedIn }} // Include setUser here
    >
      {children}
    </UserContext.Provider>
  );
};