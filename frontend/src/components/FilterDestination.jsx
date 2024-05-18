import React, { useState } from 'react';
import '../assets/styles/Filter.css';

function FilterDestination() {
    const [formData, setFormData] = useState({
        continent: [],
        'price-range': '10000',
        climate: []
    });

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: checked
                ? [...prevFormData[name], value]
                : prevFormData[name].filter((item) => item !== value)
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="filter-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="continent">Continent:</label>
                    <div>
                        {['Africa', 'Asia', 'Australia', 'Europe', 'Latin America', 'North America'].map(continentInstance => (
                            <label key={continentInstance}>
                                <input
                                    type="checkbox"
                                    name="continent"
                                    value={continentInstance}
                                    checked={formData.continent.includes(continentInstance)}
                                    onChange={handleCheckboxChange}
                                />
                                {continentInstance}
                            </label>
                        ))}
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="price-range">Price range:</label>
                    <input
                        type="range"
                        id="price-range"
                        min="0"
                        max="10000"
                        name="price-range"
                        value={formData['price-range']}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="climate">Climate:</label>
                    <div>
                        {['Arid', 'Tropical', 'Subtropical', 'Oceanic', 'Semi-arid', 'Temperate', 'Continental', 'Mediterranean', 'Humid subtropical', 'Desert'].map(climateInstance => (
                            <label key={climateInstance}>
                                <input
                                    type="checkbox"
                                    name="climate"
                                    value={climateInstance}
                                    checked={formData.climate.includes(climateInstance)}
                                    onChange={handleCheckboxChange}
                                />
                                {climateInstance}
                            </label>
                        ))}
                    </div>
                </div>
                <button type="submit" className="btn">Register</button>
            </form>
        </div>
    );
}

export default FilterDestination;
