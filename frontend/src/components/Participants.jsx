import { useEffect, useState } from "react";
import '../assets/styles/Plans.css';
import '../assets/styles/ModalForm.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl } from '../config';


function Participants({ participants, planId }) {

    const [reload, setReload] = useState(false);
    const [participantsState, setParticipantsState] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newParticipant, setNewParticipant] = useState('');

    useEffect(() => {
        const fetchParticipantsData = async () => {
            try {

                let bodyData = {
                    participants: participants
                };

                let response = await fetch(`${apiUrl}/nacrt/getParticipantsData`, {
                    method: 'POST',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(bodyData)
                });

                if (!response.ok) {
                    throw new Error('Error fetching participants');
                }
                const data = await response.json();
                setParticipantsState(data);
            } catch (error) {
                console.error('Error fetching participants:' + error);
            }
        }
        if (participants) {
            fetchParticipantsData();
        }
    },
        [participants, reload]
    )

    const handleClick = async (userId) => {
        try {
            const response = await fetch(`${apiUrl}/nacrt/removeParticipant?userId=${userId}&planId=${planId}`, {
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                toast.success("Removed participant successfully!", { autoClose: 1500 });
                setParticipantsState(prevState => prevState.filter(p => p.id !== userId));
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to remove participant!");
        }
    };

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleModalSubmit = async () => {
        let participantsArray = []
        for(const participant of participantsState){
            participantsArray.push(participant.id)
        }
        const bodyData = {
            planId: planId,
            participants: participantsArray,
            added_username: newParticipant
        }
        const response = await fetch(`${apiUrl}/nacrt/addParticipantToPlan`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyData)
        });
        if(!response.ok){
            toast.error(await response.json(), { autoClose: 1500 });
            setNewParticipant("");
            setIsModalOpen(false);
        }
        else{
            const responseData = await response.json();
            toast.success("Added participant successfully!", { autoClose: 1500 });
            setParticipantsState(prevState => [...prevState, responseData.user]);
            setNewParticipant("");
            setIsModalOpen(false);
        }
        setIsModalOpen(false);
    };

    const handleModalCancel = () => {
        setNewParticipant("");
        setIsModalOpen(false);
    };


    return (
        <div>
            <ul className="participants">
                <div className="participant-item">
                    <h3>Participants</h3>
                    <i className="bi bi-person-add participant-icon" onClick={handleAdd}></i>
                </div>
                {participantsState.map(participant => (
                    <li key={participant.id} className='participant-item'>
                        <Link to={`/user/${participant.id}`}>{participant.username}</Link>
                        <i className="bi bi-person-dash participant-icon" onClick={() => { handleClick(participant.id) }}></i>
                    </li>
                ))}
                <ToastContainer />
            </ul>
            {isModalOpen && (
                <div className="overlay overlay-plan">
                    <div className="modal modal-plan">
                        <div className="modal-form">
                            <h2>Add Participant</h2>
                            <div className="modal-form-group">
                                <label className="modal-label">Username</label>
                                <input
                                    type="text"
                                    className="modal-input"
                                    value={newParticipant}
                                    onChange={(e) => setNewParticipant(e.target.value)}
                                    placeholder="Enter username"
                                />
                            </div>
                            <button className="modal-button modal-submit-button" onClick={handleModalSubmit}>Submit</button>
                            <button className="modal-button modal-close-button" onClick={handleModalCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Participants;