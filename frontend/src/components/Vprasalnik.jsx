import React, { useState } from 'react';
import '../assets/styles/Vprasalnik.css';
import { Link } from 'react-router-dom';

function Vprasalnik() {
    const [selectedOptions, setSelectedOptions] = useState({});

    const handleOptionChange = (event, menuName) => {
        setSelectedOptions({
            ...selectedOptions,
            [menuName]: event.target.value
        });
    };

    return (
        <div className="container">
            <h2 className="title">Vprašalnik</h2>
            <div className="question-container">
                <h3 className="question-title">Kateri je vaš najljubši letni čas?</h3>
                <select className="select-dropdown" value={selectedOptions["menu1"]} onChange={(event) => handleOptionChange(event, "menu1")}>
                    <option value="">Izberite</option>
                    <option value="Jesen">Jesen</option>
                    <option value="Zima">Zima</option>
                    <option value="Pomlad">Pomlad</option>
                    <option value="Poletje">Poletje</option>
                </select>
               
            </div>
            <div className="question-container">
                <h3 className="question-title">Katere znamenitosti vas najbolj zanimajo?</h3>
                <select className="select-dropdown" value={selectedOptions["menu2"]} onChange={(event) => handleOptionChange(event, "menu2")}>
                    <option value="">Izberite</option>
                    <option value="Naravne znamenitosti">Naravne znamenitosti</option>
                    <option value="Kulturne znamenitosti">Kulturne znamenitosti</option>
                    
                </select>
            </div>
            <div className="question-container">
                <h3 className="question-title">Kateri tip reliefa vas najbolj privlači?</h3>
                <select className="select-dropdown" value={selectedOptions["menu3"]} onChange={(event) => handleOptionChange(event, "menu3")}>
                    <option value="">Izberite</option>
                    <option value="Gorski">Gorski</option>
                    <option value="Obmorski">Obmorski</option>
                    <option value="Ravninski">Ravninski</option>
                    <option value="Puščavski">Puščavski</option>
                </select>
                <Link to="/frontpage">
                    <button className='vprasalnik-button'>Naprej</button>
                </Link>
            </div>
          
        </div>
    );
}

export default Vprasalnik;
