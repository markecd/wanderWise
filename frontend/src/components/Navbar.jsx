import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Navbar.css';
import { React, useEffect, useState } from "react";
import SearchBarNav from './SearchBarNav';


function Navbar() {
    const [userId, setUserId] = useState();
    const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();


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
	
	const handleLogout = async () => {
		try {
			const response = await fetch(`http://localhost:6500/user/logoutUser`, {
				method: 'POST',
				credentials: 'include'
			});
			if (!response.ok) {
				throw new Error('Logout failed');
			}
			navigate('/');
		} catch(error) {
			console.log(error.message);
		}
	};


    const handleSearchChange = (value) => {
        setSearchValue(value);
        console.log(searchValue);
        //ob vsakem se naj s trenutnim vnosom gre cez skripto in vraca rerender komponente pod search barom ki nam mece rezultate
    };

    const handleSearchSubmit = () => {
        // call na chatgpt al ka je
        console.log(searchValue)
        console.log("ajdee")
    };


    return (
        <div className="navbar">
            <Link to="/frontpage">
                <img className="logo" src="/pictures/WanderLogo.png" alt="Logo" />
            </Link>
            <SearchBarNav searchValue={searchValue} onSearchChange={handleSearchChange} onSearchSubmit={handleSearchSubmit} />
            <div className="navbar-menu">
            <Link to={`/user/${userId}`}>
                <img className="user-logo" src="/pictures/User.png" alt="User Logo" />
            </Link>
                <img className='logout-logo' src="/pictures/Logout.png" alt='Logout Logo' onClick={handleLogout} />
            </div>
        </div>
    );
}

export default Navbar;
