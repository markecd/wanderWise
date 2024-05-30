import React, { useState } from 'react';

function SearchBar({ searchValue, onSearchChange, onSearchSubmit }) {

    const handleInputChange = (e) => {
        onSearchChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit();
    };
	
    return (
        <>
            <form>
                <input
                    type="text"
                    value={searchValue}
                    onChange={handleInputChange}
                    placeholder="Search destinations..."
                />
            </form>
            <img className="searchbar-icon" onClick={handleSubmit} src="/pictures/search-icon.png" />
        </>
    );
}

export default SearchBar;