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
    <div className="min-h-screen flex items-start pt-25 justify-center  bg-brandLight dark:bg-brandDark">
    <div className="w-full max-w-md bg-brandLightSecondary dark:bg-brandSecondary rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-brandLightText dark:text-brandPrimary text-center mb-6">
        My Account
      </h2>

      <div className="flex flex-col items-center space-y-4">
        <div className="flex-shrink-0 w-30 h-30 rounded-lg overflow-hidden border-2 border-brandPrimary">
        <img
          src={user.avatar_url}
          alt={user.username}
          className=" w-30 h-43 rounded-lg object-cover shadow-md"
        />

        </div >
        <div className="text-brandLightText dark:text-brandText">
          <p className="text-lg p-4">
            <span className="font-semibold">Name:</span> {user.name}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
        </div>

        <button
          onClick={signOut}
          className="mt-6 px-5 py-2 bg-red-500 hover:bg-red-700 text-brandLightText rounded-lg transition-colors duration-250 cursor-pointer"
        >
          Sign Out
        </button>
      </div>
    </div>

    </div>
  );
};
