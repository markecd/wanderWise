import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forum from "../components/Forum";
import {React, useState, useEffect} from "react";
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

    return (
        <div className="plan">
            <Navbar />
            <div className="plan-content">
                <div className="plan-data-container">
                    <h1 className="plan-name">{plan.plan_name}</h1>
                    <p className="plan-user">Creator:  <Link to={`/user/${plan.userid}`}>{user.username}</Link></p>
                    <p className="plan-description">{plan.plan_description}</p>
                </div>
                <div className="plan-map">
                    <Map locationData={locationData} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Plan;