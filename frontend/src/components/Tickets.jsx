import { useEffect, useState } from "react";
import '../assets/styles/Plans.css';
import '../assets/styles/ModalForm.css';
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

    return (
        <div>
            <ul className="offers">
                <h3>Offers:</h3>
                {offers.map(offer => (
                    <li key={offer.link} className='participant-item'>
                        <div>
                            <p>{"Flight number: " + offer.flight_number}</p>
                            <p>{"Price: " + offer.price + "EUR"}</p>
                            <Link to={`https://aviasales.com${offer.link}`}>
                                <button>Buy</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tickets;
