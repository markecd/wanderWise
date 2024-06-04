import { Link } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { React, useEffect, useState } from "react";
import SearchBar from './SearchBar';


function Navbar() {
    const [userId, setUserId] = useState();
    const [searchCriteria, setSearchCriteria] = useState("");
    const [searchValue, setSearchValue] = useState("");

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

    
    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    const handleSearchSubmit = () => {
        setSearchCriteria(searchValue);
    };


    return (
        <div className="navbar">
            <Link to="/frontpage">
                <img className="logo" src="/pictures/WanderLogo.png" alt="Logo" />
            </Link>
            <SearchBar searchValue={searchValue} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit}/>
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
