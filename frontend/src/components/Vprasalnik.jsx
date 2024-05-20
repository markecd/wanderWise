import React, { useState } from 'react';
import '../assets/styles/Vprasalnik.css';
import { Link } from 'react-router-dom';

function Vprasalnik() {
    const [selectedOptions, setSelectedOptions] = useState({
        continent: [],
        'price-range': '350',
        climate: []
    });
    const handleOptionChange = (event, menuName) => {
        const value = event.target.value;
        if (menuName === 'climate' || menuName === 'continent') {
            setSelectedOptions(prevOptions => ({
                ...prevOptions,
                [menuName]: value.split(',')
            }));
        } else {
            setSelectedOptions(prevOptions => ({
                ...prevOptions,
                [menuName]: value
            }));
        }
    };

    const buildQueryParams = () => {
        const params = new URLSearchParams();
        for (const key in selectedOptions) {
            if (Array.isArray(selectedOptions[key])) {
                params.append(key, selectedOptions[key].join(','));
            } else {
                params.append(key, selectedOptions[key]);
            }
        }
        return params.toString();
    };

    return (
        <div className="container">
            <h2 className="title">Let us personalize your set of destinations</h2>
            <div className="question-container">
                <h3 className="question-title">What is your favourite season?</h3>
                <select className="select-dropdown" value={selectedOptions.climate.join(',')} onChange={(event) => handleOptionChange(event, "climate")}>
                    <option value="" disabled hidden>Choose</option>
                    <option value="Temperate,Oceanic,Mediterranean,Humid subtropical">Autumn</option>
                    <option value="Continental">Winter</option>
                    <option value="Temperate,Oceanic,Mediterranean,Humid subtropical">Spring</option>
                    <option value="Tropical,Subtropical,Mediterranean,Arid,Semi-arid,Desert">Summer</option>
                </select>

            </div>
            <div className="question-container">
                <h3 className="question-title">What attractions interest you?</h3>
                <select className="select-dropdown" value={selectedOptions.continent.join(',')} onChange={(event) => handleOptionChange(event, "continent")}>
                    <option value="" disabled hidden>Choose</option>
                    <option value="South America,North America,Australia,Asia,Africa">Natural attractions</option>
                    <option value="Europe,North America">Cultural attractions</option>

                </select>
            </div>
            <div className="question-container">
                <h3 className="question-title">What is your preferred price standard?</h3>
                <select className="select-dropdown" value={selectedOptions["price-range"]} onChange={(event) => handleOptionChange(event, "price-range")}>
                    <option value="" disabled hidden>Choose</option>
                    <option value="200">Low</option>
                    <option value="250">Medium</option>
                    <option value="350">High</option>
                </select>
            </div>
            <Link to={`/frontpage?${buildQueryParams()}`}>
                <button className='vprasalnik-button'>Continue</button>
            </Link>
        </div>
    );
}

export default Vprasalnik;
