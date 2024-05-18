import { useEffect, useState } from 'react';
import '../assets/styles/Destination.css';



function Destination() {
    const [destinacije, setDestinacije] = useState([]);

    useEffect(() => {
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
    }, []);

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