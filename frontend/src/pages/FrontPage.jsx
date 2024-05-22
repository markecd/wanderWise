import {React, useState, useEffect} from "react";
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
        climate: [],
		searchCriteria: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const newFilterCriteria = {
            continent: params.get('continent') ? params.get('continent').split(',') : [],
            'price-range': params.get('price-range') || '350',
            climate: params.get('climate') ? params.get('climate').split(',') : [],
			searchCriteria: params.get('searchCriteria') || ''
        };
        setFilterCriteria(newFilterCriteria);
    }, [location.search]);

    const handleFilterSubmit = (formData) => {
        setFilterCriteria(formData);
    };
	
	const handleSearch = (iskanje) => {
		setFilterCriteria((prevCriteria) => ({
			...prevCriteria,
			searchCriteria: iskanje
		}));
	};

    return (
        <div className="frontpage">
            <Navbar />
			<div className="search-bar">
				<SearchBar onSearch={handleSearch} />
			</div>
            <div className="main-content">
			
                <div className="filter-container">
                    <FilterDestination
                        initialFormData={filterCriteria}
                        onSubmit={handleFilterSubmit}
                    />
                </div>
                    <Destination key={JSON.stringify(filterCriteria)} filterCriteria={filterCriteria} />
            </div>
            <Footer />
        </div>
    );
}

export default FrontPage;
