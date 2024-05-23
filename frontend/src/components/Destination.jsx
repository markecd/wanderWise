import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Destination({filterCriteria}) {
    const [destinacije, setDestinacije] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDestinations = async () => {
            try {
                const query = new URLSearchParams({
                    continent: filterCriteria.continent.join(','),
                    priceRange: filterCriteria['price-range'],
                    climate: filterCriteria.climate.join(',')
                }).toString();
                
                let response;

                if(filterCriteria.continent.length === 0 && filterCriteria['price-range'] === "350" && filterCriteria.climate.length === 0){
                    response = await fetch ('http://localhost:6500/destinacija/getAll');
                }
                else{
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

    const handleClick = (id) => {
        navigate(`/planpage/${id}`);
    }

    return (

        <div className="destinations-grid">
            {destinacije.map(destinacija => (
                <div key={destinacija.destination_name} className='destination-container'>
                    <img onClick={() => {handleClick(destinacija.id)}}  src={destinacija.picture_url} alt={destinacija.destination_name} className="destination-image" />
                    <h3 className='destination-name'>{destinacija.destination_name + ", " + destinacija.country}</h3>
                </div>
            ))}
        </div>
    )
}


export default Destination;