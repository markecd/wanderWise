import React, { useState } from 'react';
import DestinationSearch from './DestinationSearch';


function SearchBarNav({ searchValue, onSearchChange, onSearchSubmit }) {

    const [searchValueForSearchBar, setSearchValueForSearchBar] = useState();

    const handleInputChange = (e) => {
        setSearchValueForSearchBar(e.target.value);
        onSearchChange(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit();
    };
	
    return (
        <>
            {<DestinationSearch search={searchValueForSearchBar}/>}
        </>
    );
}

export default SearchBarNav;