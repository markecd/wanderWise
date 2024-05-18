import Navbar from "../components/Navbar";
import {React, useState} from "react";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import FilterDestination from "../components/FilterDestination";
import '../assets/styles/FrontPage.css';

function FrontPage() {
    const [filterCriteria, setFilterCriteria] = useState({
        continent: [],
        'price-range': '350',
        climate: []
    });

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
                    <Destination filterCriteria={filterCriteria}/>
            </div>
            <Footer />
        </div>
    );
}

export default FrontPage;
