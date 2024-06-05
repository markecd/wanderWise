import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/ModalForm.css';
import { toast } from 'react-toastify'; 
import AutocompleteInput from './AutocompleteInput';


Modal.setAppElement('#root');

async function createPlan(planData) {
    try {
        const response = await fetch('http://localhost:6500/nacrt/createPlan', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(planData),
            credentials: 'include'
        });

        const serverResponse = await response.json();

        if (response.ok) {
            toast.success("Plan created successfully!", { autoClose: 1500 });
            setTimeout(() => {
                window.location.reload();  
            }, 2000);
            return serverResponse;
        } else {
            toast.error(serverResponse.message);
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while creating the plan.');
    }
}

const initialState = {
    destinationId: 0,
    name: '',
    description: '',
    startingPoint: '',
    endPoint: '',
    intermediatePoints: [],
    userId: 0
}

async function getCoordinates(destination) {
    const apiKey = 'AIzaSyCjk-s4EFjFeAng5r4VGk2YUH2ar8Ao6lI'; 
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            const location = data.results[0].geometry.location;
            return { latitude: location.lat, longitude: location.lng };
        } else if (data.status === 'ZERO_RESULTS') {
            console.error(`No results found for address: ${destination}`);
            return null; 
        } else {
            throw new Error(data.status);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        return null;
    }
}






function ModalForm({ id, isOpen, onRequestClose }) {
    const [formData, setFormData] = useState(initialState);
    const [userId, setUserId] = useState();

    useEffect(() => {
        const fetchUserIdAndUpdateFormData = async () => {
            try {
                const response = await fetch(`http://localhost:6500/user/getUserIdAuth`, {
                    method: 'GET',
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userId = await response.json();
                setUserId(userId);
                setFormData(prevState => ({ ...prevState, destinationId: id }));
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchUserIdAndUpdateFormData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAutocompleteChange = (name, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleIntermediatePointChange = (index, value) => {
        const newIntermediatePoints = [...formData.intermediatePoints];
        newIntermediatePoints[index] = value;
        setFormData({ ...formData, intermediatePoints: newIntermediatePoints });
    };

    const addIntermediatePoint = () => {
        setFormData({
            ...formData,
            intermediatePoints: [...formData.intermediatePoints, '']
        });
    };

    const deleteIntermediatePoint = (index) => {
        const newIntermediatePoints = formData.intermediatePoints.filter((_, i) => i !== index);
        setFormData({ ...formData, intermediatePoints: newIntermediatePoints });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const startingCoordinates = await getCoordinates(formData.startingPoint);
            const endingCoordinates = await getCoordinates(formData.endPoint);
            const intermediateCoordinatesPromises = formData.intermediatePoints.map(point => getCoordinates(point));
            const intermediateCoordinates = await Promise.all(intermediateCoordinatesPromises);
    
    
                const planData = {
                    destinationId: id,
                    planName: formData.name,
                    planDescription: formData.description,
                    startingPoint: startingCoordinates,
                    endPoint: endingCoordinates,
                    intermediatePoints: intermediateCoordinates,
                    userId: userId
                };
                
                debugger
                await createPlan(planData);
                
                setFormData(initialState);
                console.log(planData);
          
        } catch (error) {
            console.error('Error processing form:', error);
            toast.error('An error occurred while processing the form.');
        }
    };
    
    

      
    return (
        <Modal
        id={id}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add Plan"
        className="modal"
        overlayClassName="overlay"
    >
        <h2>Add New Plan</h2>
        <form onSubmit={handleSubmit} className="modal-form">
            <div className="modal-form-group">
                <label htmlFor="planName" className="modal-label">Plan Name</label>
                <input
                    type="text"
                    id="planName"
                    name="name"
                    className="modal-input"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="modal-form-group">
                <label htmlFor="planDescription" className="modal-label">Plan Description</label>
                <textarea
                    id="planDescription"
                    name="description"
                    className="modal-textarea"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div className="modal-form-group">
                <label htmlFor='planStartingPoint' className='modal-label'>Starting Point</label>
                <AutocompleteInput
                    value={formData.startingPoint}
                    onChange={(value, location) => handleAutocompleteChange('startingPoint', value, location)}
                />
            </div>
            <div className="modal-form-group">
                <label className='modal-label'>Intermediate Points</label>
                {formData.intermediatePoints.map((point, index) => (
                    <div key={index} className="modal-form-group">
                        <AutocompleteInput
                            value={point}
                            onChange={(value, location) => handleIntermediatePointChange(index, value, location)}
                        />
                        <button
                            type="button"
                            className="modal-button delete-button"
                            onClick={() => deleteIntermediatePoint(index)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
                <button type='button' className='modal-button' onClick={addIntermediatePoint}>+</button>
            </div>
            <div className="modal-form-group">
                <label htmlFor='planEndPoint' className='modal-label'>Ending Point</label>
                <AutocompleteInput
                    value={formData.endPoint}
                    onChange={(value, location) => handleAutocompleteChange('endPoint', value, location)}
                />
            </div>
            <div className="modal-form-group">
                <button type="submit" className="modal-button modal-submit-button">Submit</button>
                <button type="button" onClick={onRequestClose} className="modal-button modal-close-button">Close</button>
            </div>
        </form>
    </Modal>
    );
}

export default ModalForm;
