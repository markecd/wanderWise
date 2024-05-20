import Navbar from "../components/Navbar";
import {React, useState, useEffect} from "react";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import FilterDestination from "../components/FilterDestination";
import '../assets/styles/FrontPage.css';
import { useLocation } from "react-router-dom";

function FrontPage() {
    const location = useLocation();

    const [filterCriteria, setFilterCriteria] = useState({
        continent: [],
        'price-range': '350',
        climate: []
    });

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

    return (
        <div className="frontpage">
            <Navbar />
            <div className="main-content">

                <div className="filter-container">
                    <FilterDestination
                        initialFormData={filterCriteria}
                        onSubmit={handleFilterSubmit}
                    />
                </div>
                    <Destination key={JSON.stringify(filterCriteria)} filterCriteria={filterCriteria}/>
            </div>
            <Footer />
        </div>
    );
}

export default FrontPage;
