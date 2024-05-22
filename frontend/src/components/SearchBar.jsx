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
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={iskanje}
				onChange={handleInputChange}
				placeholder="Search destinations..."
			/>
			<button type="submit">Search</button>
		</form>
    );
}

export default SearchBar;