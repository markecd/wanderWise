import React, { useState } from 'react';
import '../assets/styles/Filter.css';

function FilterDestination({ initialFormData, onSubmit }) {

    const [formData, setFormData] = useState(initialFormData);

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

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className="filter-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="continent"><b>Continent</b></label>
                    <div>
                        {['Africa', 'Asia', 'Australia', 'Europe', 'South America', 'North America'].map(continentInstance => (
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
                    <label htmlFor="price-range" className="label-price-range"><b>Price range</b></label>
                    <p className="price-range-describe">{"(Average daily cost)"}</p>
                    <input
                        type="range"
                        id="price-range"
                        min="0"
                        max="350"
                        name="price-range"
                        value={formData['price-range']}
                        onChange={handleChange}
                    />
                    {formData['price-range'] + "€"}

                </div>
                <div className="form-group">
                    <label htmlFor="climate"><b>Climate</b></label>
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
                <button type="submit" className="btn"><i className="bi bi-funnel-fill"></i></button>
            </form>
        </div>
    );
}

export default FilterDestination;
