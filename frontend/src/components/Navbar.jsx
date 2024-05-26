import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { React, useEffect, useState } from "react";


function Navbar() {
    const [userId, setUserId] = useState();

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const response = await fetch(`http://localhost:6500/user/getUserIdAuth`, {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userId = await response.json();
                setUserId(userId);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserId();
    }, []);

    return (
        <div className="navbar">
            <Link to="/frontpage">
                <img className="logo" src="/pictures/WanderLogo.png" alt="Logo" />
            </Link>
            <div className="navbar-menu">
            <Link to={`/user/${userId}`}>
                <img className="user-logo" src="/pictures/User.png" alt="User Logo" />
            </Link>
                <img className='logout-logo' src="/pictures/Logout.png" alt='Logout Logo'/>
            </div>
        </div>
    );
}

export default Navbar;
