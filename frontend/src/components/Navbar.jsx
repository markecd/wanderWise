import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <h2>Welcome to WanderWise</h2>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    );
}

export default Navbar;