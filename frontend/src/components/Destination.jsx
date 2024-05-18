import { useEffect, useState } from 'react';
import '../assets/styles/Destination.css';



function Destination({filterCriteria}) {
    const [destinacije, setDestinacije] = useState([]);

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const query = new URLSearchParams({
                    continent: filterCriteria.continent.join(','),
                    priceRange: filterCriteria['price-range'],
                    climate: filterCriteria.climate.join(',')
                }).toString();

                let response;

                if(filterCriteria.continent.length == 0 && filterCriteria['price-range'] == "350" && filterCriteria.climate.length == 0){
                    debugger
                    response = await fetch ('http://localhost:6500/destinacija/getAll');
                }
                else{
                    debugger
                    response = await fetch(`http://localhost:6500/destinacija/getFiltered?${query}`);
                }
                if (!response.ok) {
                    throw new Error('Failed to fetch destinations');
                }
                const data = await response.json();
                setDestinacije(data);
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };
        fetchDestinations();
    }, [filterCriteria]);
    /*useEffect(() => {
        const pridobiDestinacije = async () => {
            try {
                const response = await fetch('http://localhost:6500/destinacija/getAll')
                if (!response.ok) {
                    throw new Error('Ni blou!');
                }
                const data = await response.json();
                setDestinacije(data);
                debugger
            }
            catch (error) {
                console.error('Error pri pridobivanju destinacij:' + error);
            }
        }
        pridobiDestinacije();
    }, []);*/

    return (
        <div className="destinations-grid">
            {destinacije.map(destinacija => (
                <div key={destinacija.id} className='destination-container'>
                    <img src={destinacija.picture_url} alt={destinacija.name} className="destination-image" />
                    <h3 className='destination-name'>{destinacija.destination_name + ", " + destinacija.country}</h3>
                </div>
            ))}
        </div>
    )
}


export default Destination;