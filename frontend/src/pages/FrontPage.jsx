import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import '../assets/styles/FrontPage.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import FilterDestination from "../components/FilterDestination";
import SearchBar from "../components/SearchBar";

function FrontPage() {
    const location = useLocation();

    const [filterCriteria, setFilterCriteria] = useState({
        continent: [],
        'price-range': '350',
        climate: []
    });
	
	const [searchCriteria, setSearchCriteria] = useState("");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const newFilterCriteria = {
            continent: params.get('continent') ? params.get('continent').split(',') : [],
            'price-range': params.get('price-range') || '350',
            climate: params.get('climate') ? params.get('climate').split(',') : []
        };
        setFilterCriteria(newFilterCriteria);
    }, [location.search]);

    const handleFilterSubmit = (formData) => {
        setFilterCriteria(formData);
    };

    const handleSearchChange = (value) => {
        setSearchValue(value);
    };

    const handleSearchSubmit = () => {
        setSearchCriteria(searchValue);
    };

    return (
        <div className="frontpage">
            <Navbar />
			
            <div className="main-content">
                <div className="filter-container">
                    <div className="search-bar">
                        <SearchBar 
							searchValue={searchValue}
							onSearchChange={handleSearchChange}
							onSearchSubmit={handleSearchSubmit}
						/>
                    </div>
                    <FilterDestination
                        initialFormData={filterCriteria}
                        onSubmit={handleFilterSubmit}
                    />
                </div>
				
                <Destination 
					key={JSON.stringify(filterCriteria) + searchCriteria} 
					filterCriteria={filterCriteria} 
					searchCriteria={searchCriteria}
				/>
            </div>
            <Footer />
        </div>
    );
}

export default FrontPage;
