// AccountPage.jsx

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const AccountPage = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      navigate("/signin"); // Move navigation outside of rendering
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const signOut = () => {
    logout(); // Call logout function to clear user state and update isLoggedIn to false
    navigate("/"); // Navigate after logout
  };

  // Render null if user is not logged in to avoid setState during rendering
  if (!user.username) {
    return null;
  }

  return (
    <div>
      <h2>My Account</h2>
      <img src={user.avatar_url} alt={user.username} />
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
};
