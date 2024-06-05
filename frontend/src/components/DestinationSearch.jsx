import React, { useState, useEffect } from 'react';
import '../assets/styles/DestinationSearch.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const DestinationSearch = () => {
    const [destinations, setDestinations] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchDestinations() {
            try {
                const response = await fetch('/structured_destinations_firestore.json');
                const data = await response.json();
                setDestinations(data);
            } catch (error) {
                console.error('Error fetching the JSON file:', error);
            }
        }
        fetchDestinations();
    }, []);

    const findMatchingDestinations = (input) => {
        if (!input) return [];
        const lowercaseInput = input.toLowerCase();
        return destinations
            .filter(destination =>
                destination.fields &&
                destination.fields.destination_name &&
                destination.fields.destination_name.stringValue &&
                destination.fields.destination_name.stringValue.toLowerCase().startsWith(lowercaseInput)
            )
            .map(destination => destination.fields.destination_name.stringValue);
    };

    const matchingDestinations = findMatchingDestinations(searchValue);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleOnClick = async (destination) => {
        setLoading(true);
        const response = await fetch(`http://localhost:6500/cohere/getGeneratedPlan?destinationName=${destination}`)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()

        const cleanResponse = data.replace(/\`\`\`json|\`\`\`/g, '');
        let savedPlan = JSON.parse(cleanResponse);

        savedPlan.end_point.latitude = Number(savedPlan.end_point.latitude);
        savedPlan.end_point.longitude = Number(savedPlan.end_point.longitude);
        savedPlan.starting_point.latitude = Number(savedPlan.starting_point.latitude);
        savedPlan.starting_point.longitude = Number(savedPlan.starting_point.longitude);

        savedPlan.intermediate_points = savedPlan.intermediate_points.map(point => {
            return {
                latitude: Number(point.latitude),
                longitude: Number(point.longitude)
            };
        });

        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const formattedDate = `${year}-${month}`;
        savedPlan.date_from = formattedDate;
        savedPlan.date_to = formattedDate;

        const response2 = await fetch(`http://localhost:6500/destinacija/getDestinationIdByName?destinationName=${destination}`, {
            credentials: 'include'
        })
        if (!response2.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const destinationId = await response2.json();

        savedPlan.destionationid = destinationId;

        const response3 = await fetch(`http://localhost:6500/user/getUserIdAuth`, {
            method: 'GET',
            credentials: 'include'
        });
        if (!response3.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const userId = await response3.json();

        savedPlan.participants = [userId];

        savedPlan.userid = userId.concat("", "BOT");

        const response4 = await fetch("http://localhost:6500/nacrt/createGeneratedSavedPlan", {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ savedPlan })
        })
        if (!response4.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const createdPlanId = await response4.json();

        setLoading(false);
        setSearchValue('');

        toast.success("Generated successfully!");


        setTimeout(() => {
            window.location.href = `/savedPlan/${createdPlanId}`;
        }, 1500);
    }

    return (
        <div className="search-container">
            <div className="search-bar">
                <i className="bi bi-stars search-icon"></i>
                <div className="input-wrapper">
                    {!loading && <input
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        placeholder="AI Generate plan for..."
                    />}
                    {loading && <div className="loading">Generating plan<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></div>}
                    {!loading && matchingDestinations.length > 0 && (
                        <ul>
                            {matchingDestinations.map((destination, index) => (
                                <li key={index} onClick={() => handleOnClick(destination)}>{destination}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
            <ToastContainer autoClose={1000}/>
        </div>
    );
};

export default DestinationSearch;