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
            }
            catch (error) {
                console.error('Error pri pridobivanju destinacij:' + error);
            }
        }
        pridobiDestinacije();
    }, []);

    return (
        <>
            {destinacije.map(destinacija => (
                <div key={destinacija.id} className='destination-container'>
                <h3 className='destination-name'>{destinacija.name}</h3>
                SLIKA   
                
            </div>
            ))
            }
        </>
    )
}


export default Destination;