import React, { useEffect, useRef, useState } from 'react';

function AutocompleteInput({ value, onChange }) {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        setInputValue(value); 
    }, [value]);

    useEffect(() => {
        if (!window.google) return;

        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
            types: ['geocode']
        });

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (place.geometry) {
                const location = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng()
                };
                setInputValue(place.formatted_address);
                onChange(place.formatted_address);
            }
        });

        return () => {
            window.google.maps.event.clearInstanceListeners(autocomplete);
        };
    }, [onChange]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
        onChange(e.target.value);
    };

    return (
        <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={handleChange}
            className="modal-input"
        />
    );
}

export default AutocompleteInput;
