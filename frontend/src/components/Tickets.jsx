import { useEffect, useState } from "react";
import '../assets/styles/Plans.css';
import '../assets/styles/ModalForm.css';
import '../assets/styles/Tickets.css';
import { Link, useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Tickets({ dateFrom, dateTo, destinationId }) {

    const [offers, setOffers] = useState([]);

    useEffect(() => {
        async function fetchDestination() {

            const response = await fetch(`http://localhost:6500/destinacija/getDestinationById?destinationId=${destinationId}`, {
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const cityName = await response.json();

            if ("geolocation" in navigator) {
                navigator.geolocation.getCurrentPosition(async function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    try {
                        const response = await fetch('http://localhost:6500/nacrt/dobiLokacijo', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            credentials: 'include',
                            body: JSON.stringify({ latitude, longitude, cityName, dateFrom, dateTo })
                        });
                        const data = await response.json();
                        debugger
                        setOffers(data)
                    } catch (error) {
                        console.error('Error:', error);
                    }
                }, function (error) {
                    console.error("Error Code = " + error.code + " - " + error.message);
                });
            } else {
                console.log("Geolocation is not supported by this browser.");
            }
        }
        fetchDestination();
    }, [destinationId]);

    function formatDate(dateString){
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}. ${month}. ${year}  ${hours}:${minutes}`;

    }

    return (
        <div>
            <ul className="offers">
                <div className="offers-text">
                    <h3>Offers</h3>
                </div>
                {offers.map(offer => (
                    <li key={offer.link} className='participant-item ticket-item'>
                        <div className="tickets">
                            <div className="ticketContent">
                                <div className="ticket-block">
                                    <p className="ticket-city">{offer.origin}</p>
                                    <p className="ticket-date">{formatDate(offer.departure_at)}</p>
                                </div>
                                <div className="ticket-block">
                                    <i className="bi bi-arrow-right"></i>
                                </div>
                                <div className="ticket-block">
                                    <p className="ticket-city">{offer.destination}</p>
                                    <p className="ticket-date">{formatDate(offer.return_at)}</p>
                                </div>
                            </div>
                            <Link to={`https://aviasales.com${offer.link}`}>
                                <button className="rotate-90"><i className="bi bi-airplane-fill"></i></button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tickets;
