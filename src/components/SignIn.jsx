import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInHandler } from "../api";
import { UserContext } from "../contexts/UserContext";

export const SignIn = () => {
  const { login } = useContext(UserContext); // Destructure login from context

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
    setLoadSignin(true);
    event.preventDefault();

    if (inputPassword === "") {
      setLoadSignin(false);
      return setPasswordErr(true);
    }

    signInHandler(inputUsername).then((users) => {
      const foundUser = users.find((user) => user.username === inputUsername);
      if (foundUser) {
        setLoadSignin(false);
        login(foundUser); // Update user context with foundUser
        navigate("/account"); // Navigate to account page on successful sign in
      } else {
        setLoadSignin(false);
        setUsernameErr(true);
      }
    });
  };

  return (
    <div className="sign-in">
      <h3>Welcome!</h3>
      <p>Login to your account</p>
      <div className="login-box">
        <form className="signin-form" id="signin">
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            placeholder="Username"
            value={inputUsername}
            onChange={usernameHandler}
            required
          ></input>
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="Password"
            onChange={passwordHandler}
            type="password"
            required
          ></input>
          <br />
          <br />
          <button type="submit" onClick={signInButton}>
            Sign In
          </button>
        </form>
        <span className="error-box">
          {passwordErr ? <p>Please fill in a password to continue</p> : null}
        </span>
        <span className="error-box">
          {usernameErr ? (
            <p>
              Username not found, please check your login details and try again
              (Hint: try "grumpy19")
            </p>
          ) : null}
        </span>
        <span className="error-box">
          {loadSignin ? <p>Signing in, please wait...</p> : null}
        </span>
      </div>
    </div>
  );
};
