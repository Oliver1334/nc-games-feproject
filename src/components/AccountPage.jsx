import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const AccountPage = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.username) {
      navigate("/signin");
    }
  }, [user, navigate]);

  const signOut = () => {
    logout();
    navigate("/");
  };

  if (!user?.username) return null;

  return (
    <div className="w-full h-full">

    <div className="max-w-md mx-auto mt-12 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        My Account
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <img
          src={user.avatar_url}
          alt={user.username}
          className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover shadow-md"
        />
        <div className="text-gray-800 dark:text-gray-200">
          <p className="text-lg">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
        </div>

        <button
          onClick={signOut}
          className="mt-6 px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200"
        >
          Sign Out
        </button>
      </div>
    </div>

    </div>
  );
};
