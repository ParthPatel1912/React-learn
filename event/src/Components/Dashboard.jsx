import React from 'react'
import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

const Dashboard = () => {
    // const [authenticated, setauthenticated] = useState(null);
    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem("authenticated");
    //     if (loggedInUser) {
    //         setauthenticated(loggedInUser);
    //     }
    // }, []);
    const loggedInUser = localStorage.getItem("authenticated");
    const User = localStorage.getItem("testuser");

    if (loggedInUser === false || loggedInUser === null) {
        return <Navigate replace to="/signup" />;
    } else {
        return (
            <div className='text-center'>
                <p>Welcome, {User} to your Dashboard</p>
            </div>
        )
    }
}

export default Dashboard
