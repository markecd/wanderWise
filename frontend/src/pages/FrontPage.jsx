import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import FilterDestination from "../components/FilterDestination";
import '../assets/styles/FrontPage.css';

function FrontPage() {
    return (
        <div className="frontpage">
            <Navbar />
            <div className="main-content">
                <div className="filter-container">
                    <FilterDestination />
                </div>
                <div className="destinations-grid">
                    <Destination />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FrontPage;
