import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forum from "../components/Forum";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";
import '../assets/styles/Plan.css';


function Plan() {
    const { id } = useParams();
    const [plan, setPlan] = useState([]);
    const [locationData, setLocationData] = useState(null);
    const [user, setUser] = useState({
        name: "",
        username: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDateFrom, setSelectedDateFrom] = useState();
    const [selectedDateTo, setSelectedDateTo] = useState();


    useEffect(() => {
        const fetchPlan = async () => {
            try {
                const response = await fetch(`http://localhost:6500/nacrt/getPlanById?planId=${id}`, {
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const planData = await response.json();
                setPlan(planData);
                const response2 = await fetch(`http://localhost:6500/user/getUserData?userId=${planData.userid}`)
                if (!response2.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userData = await response2.json();
                setUser(userData);
                const intermediate = planData.intermediate_points.map(point => `${point.latitude},${point.longitude}`).join('|');
                setLocationData({
                    start: planData.starting_point,
                    end: planData.end_point,
                    intermediate: intermediate
                });
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchPlan();
    }, [id]);

    const handleAdd = () => {
        setIsModalOpen(true);
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="plan">
            <Navbar />
            <div className="plan-content">
                <div className="plan-data-container">
                    <div className="save-option">
                        <h1 className="plan-name">{plan.plan_name}</h1>
                        <button className="save-option save-button" onClick={handleAdd}>
                            <i className="bi bi-globe-americas save-icon"></i>
                            <p className="save-text">Wander!</p>
                        </button>
                    </div>
                    <p className="plan-user">Creator:  <Link to={`/user/${plan.userid}`}>{user.username}</Link></p>
                    <p className="plan-description">{plan.plan_description}</p>
                </div>
                <div className="plan-map">
                    <Map locationData={locationData} />
                </div>
            </div>
            <Footer />
            {isModalOpen && (
                <div className="overlay overlay-plan">
                    <div className="modal modal-plan">
                        <div className="modal-form">
                            <h2>Select a plan</h2>
                            <div className="modal-form-group">
                                <label className="modal-label">Date from</label>
                                <input
                                    type="date"
                                    className="modal-input"
                                    value={selectedDateFrom}
                                    onChange={(e) => setSelectedDateFrom(e.target.value)}
                                />
                                <label className="modal-label">Date to</label>
                                <input
                                    type="date"
                                    className="modal-input"
                                    value={selectedDateTo}
                                    onChange={(e) => setSelectedDateTo(e.target.value)}
                                />
                                <label className="modal-label">Participants</label>
                                
                            </div>
                            <button className="modal-button modal-submit-button" >Submit</button>
                            <button className="modal-button modal-close-button" onClick={handleModalCancel}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Plan;