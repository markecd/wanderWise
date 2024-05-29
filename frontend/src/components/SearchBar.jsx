import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [iskanje, setIskanje] = useState('');

    const handleInputChange = (e) => {
        setIskanje(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(iskanje);
    };

    return (
        <>
            <form>
                <input
                    type="text"
                    value={iskanje}
                    onChange={handleInputChange}
                    placeholder="Search destinations..."
                />
            </form>
            <img className="searchbar-icon" onClick={handleSubmit} src="/pictures/search-icon.png" />
        </>
    );
}

export default SearchBar;