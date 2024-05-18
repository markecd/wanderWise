import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/frontpage">
                <img className="logo" src="/pictures/WanderLogo.png" alt="Logo" />
            </Link>
            <div className="navbar-menu">
                <img className="user-logo" src="/pictures/User.png" alt="User Logo" />
                <img className='logout-logo' src="/pictures/Logout.png" alt='Logout Logo'/>
            </div>
        </div>
    );
}

export default Navbar;
