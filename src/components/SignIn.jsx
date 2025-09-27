import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInHandler } from "../api";
import { UserContext } from "../contexts/UserContext";

export const SignIn = () => {
  const { login } = useContext(UserContext);

  const [inputUsername, setInputUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [loadSignin, setLoadSignin] = useState(false);

  const navigate = useNavigate();

  const usernameHandler = (event) => {
    setUsernameErr(false);
    setInputUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPasswordErr(false);
    setInputPassword(event.target.value);
  };

  const signInButton = (event) => {
    event.preventDefault();
    setLoadSignin(true);

    if (inputPassword === "") {
      setLoadSignin(false);
      return setPasswordErr(true);
    }

    signInHandler(inputUsername).then((users) => {
      const foundUser = users.find((user) => user.username === inputUsername);
      if (foundUser) {
        setLoadSignin(false);
        login(foundUser);
        navigate("/account");
      } else {
        setLoadSignin(false);
        setUsernameErr(true);
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <header className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome!</h3>
          <p className="mt-1 text-gray-600 dark:text-gray-300">Login to your account</p>
        </header>

        <form className="space-y-5" id="signin" onSubmit={signInButton} noValidate>
          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              placeholder="Username"
              value={inputUsername}
              onChange={usernameHandler}
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandPrimary/70"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              placeholder="Password"
              onChange={passwordHandler}
              type="password"
              required
              className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandPrimary/70"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loadSignin}
            className={`w-full inline-flex items-center justify-center rounded-md px-4 py-2.5 font-semibold transition-colors
              ${loadSignin
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-brandPrimary text-brandDark hover:bg-brandSecondary hover:text-brandText"
              }`}
          >
            {loadSignin ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Messages */}
        <div className="mt-4 space-y-2">
          {passwordErr && (
            <p className="rounded-md bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm px-3 py-2" role="alert">
              Please fill in a password to continue
            </p>
          )}

          {usernameErr && (
            <p className="rounded-md bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm px-3 py-2" role="alert">
              Username not found, please check your login details and try again
              <span className="ml-1 opacity-80">(Hint: try "grumpy19")</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};