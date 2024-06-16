import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (user.username) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  return (
    <div className="header">
      <section className="title">
        <Link className="link" to="/">
          NC GAMES
        </Link>
      </section>
      <section className="nav-bar">
        <section className="header-links">
          <Link className="link" to="/reviews">
            Reviews
          </Link>
        </section>

        <section className="account">
          {isLoggedIn ? (
            <Link to="/account">My Account</Link>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
        </section>
      </section>
    </div>
  );
};

export default Header;
