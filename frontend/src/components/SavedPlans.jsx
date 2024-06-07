import { useEffect, useState } from "react";
import '../assets/styles/Plans.css';
import { useParams, useNavigate } from "react-router-dom";

function SavedPlans({ id }) {

    const [plans, setPlans] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchPlans = async () => {
            try {

                const response = await fetch(`http://localhost:6500/nacrt/getSavedPlansByUser?id=${id}`, {
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error('Error fetching plans');
                }
                const data = await response.json();
                setPlans(data);
                debugger
            } catch (error) {
                console.error('Error fetching plans:' + error);
            }
        }
        if (id) {
            fetchPlans();
        }
    },
        [id]
    )

    const handleClick = (id) => {
        navigate(`/savedPlan/${id}`);
    }


    return (

        <div className="plan-grid">
            {plans.map(plan => (
                <div onClick={() => { handleClick(plan.id) }} key={plan.id} className='plan-container'>
                    <h3 className="plan-name">{plan.plan_name}</h3>
                    {plan.plan_images && <img onClick={() => { handleClick(plan.id) }} src={plan.plan_images[3]} alt={plan.plan_name} className="plan-image" />}
                    {!plan.plan_images && <p className="plan-description2">{plan.plan_description}</p>}
                </div>
            ))}
        </div>

    )
}

export default SavedPlans;