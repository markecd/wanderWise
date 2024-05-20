import { useEffect, useState } from "react";
import '../assets/styles/Plans.css';
import { useParams } from "react-router-dom";

function Plans({id}) {
    
    const [plans, setPlans] = useState([]);


    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await fetch(`http://localhost:6500/nacrt/getNacrti?id=${id}`);
                if (!response.ok) {
                    throw new Error('Error fetching plans');
                }
                const data = await response.json();
                setPlans(data);
                console.log(data);
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

    console.log(id);
  

    return (
        
            <div className="plan-grid">
            {plans.map(plan => (
                <div key={plan.id} className='plan-container'>
                    <h3 className="plan-name">{plan.plan_name}</h3>
                    <p className="plan-description">{plan.plan_description}</p>
                </div>
            ))}
        </div>
    
    )
}

export default Plans;