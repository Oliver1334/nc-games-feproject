import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext"

export const AccountPage = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(!user.username) {
            navigate("/signin");
        }
    }, [user, navigate]);

    const signOut = () => {
        setUser({})
    }

    return <div>
        <h2>My Account</h2>
        <img src={user.avatar_url} alt={user.username} />
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <button onClick={signOut}>Sign Out</button>
    </div>
}