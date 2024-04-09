import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonalNav = ({sessionUser}) => {

    if (sessionUser !== null && sessionUser !== undefined && sessionUser !== '') {
        return (
            <>
                <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
                <li className="nav-item"><a className="nav-link" href="/logout">Logout</a></li>
            </>
        );
    } else {
        return (
            <>
                <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
            </>
        );
    }
};

const Nav = ({sessionUser}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
    <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
        <li className="nav-item"><a className="nav-link" href="/workshops">Workshops</a></li>
        <li className="nav-item"><a className="nav-link" href="/community">Community</a></li>
    </ul>
    <ul className="navbar-nav">
        <PersonalNav sessionUser={sessionUser}/>
    </ul>
</nav>
    );
};

const Home = () => {

    const [sessionUser, setSessionUser] = useState(null);

    useEffect(() => {
        fetchSessionUser();
    }, []);

    const fetchSessionUser = async () => {
        try {
            const response = await axios.get('/api/getSessionUser'); // Adjust the endpoint accordingly
            if (response.status === 200) {
                setSessionUser(response.data.sessionUser);
            } else {
                console.error('Failed to fetch session user');
            }
        } catch (error) {
            console.error('Error fetching session user:', error);
        }
    };

    return (
        <>
            <Nav sessionUser={sessionUser}/>
            {sessionUser ? (
                <div className="container mt-5">
                    <h1>Welcome, {sessionUser.name}</h1>
                    <p>Learn backend development with Node.js, Express, and MongoDB</p>
                </div>
            ) : (
                <div className="container mt-5">
                    <h1>Welcome to Backend Masters</h1>
                    <p>Learn backend development with Node.js, Express, and MongoDB</p>
                    <p>Join us now by logging in</p>
                    <a className="btn btn-primary" href="/register">Register</a>
                </div>
            )}
        </>
    );
};

export default Home;
