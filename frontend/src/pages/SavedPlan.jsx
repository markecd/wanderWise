import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forum from "../components/Forum";
import { React, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Map from "../components/Map";
import Participants from "../components/Participants";
import Tickets from "../components/Tickets";
import '../assets/styles/Plan.css';


function SavedPlan() {
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
                const response = await fetch(`http://localhost:6500/nacrt/getSavedPlanById?planId=${id}`, {
                    credentials: 'include'
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const planData = await response.json();

                let dateFromUnformatted = planData.date_from;
                let dateToUnformatted = planData.date_to;

                let novObj = planData;
                let dateFrom = new Date(novObj.date_from);
                let dayFrom = dateFrom.getDate();
                let monthFrom = dateFrom.getMonth() + 1;
                let yearFrom = dateFrom.getFullYear();
                let formattedDateFrom = `${dayFrom}. ${monthFrom}. ${yearFrom}`;

                let dateTo = new Date(novObj.date_to);
                let dayTo = dateTo.getDate();
                let monthTo = dateTo.getMonth() + 1;
                let yearTo = dateTo.getFullYear();
                let formattedDateTo = `${dayTo}. ${monthTo}. ${yearTo}`;

                novObj.date_from = formattedDateFrom;
                novObj.date_to = formattedDateTo;

                novObj.dateFrom = dateFromUnformatted;
                novObj.dateTo = dateToUnformatted;
                setPlan(novObj);
                const modifiedString = planData.userid.replace(/BOT$/, "");

                const response2 = await fetch(`http://localhost:6500/user/getUserData?userId=${modifiedString}`)
                if (!response2.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const userData = await response2.json();
                setUser(userData);
                const intermediate = planData.intermediate_points ? planData.intermediate_points.map(point => `${point.latitude},${point.longitude}`).join('|') : null;
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

    const getNextMonth = (dateStr) => {
        const date = new Date(dateStr);
        const nextMonth = new Date(date.setMonth(date.getMonth() + 1));
        const year = nextMonth.getFullYear();
        const month = nextMonth.getMonth() + 1;
        return `1. ${month}. ${year}`;
    };

    return (
        <div className="plan">
            <Navbar />
            <div className="plan-content">
                <div className="plan-participants">
                    <Participants participants={plan.participants} planId={id} />
                    <div className="plan-offers">
                        {plan.destionationid && (
                            <Tickets dateFrom={plan.dateFrom} dateTo={plan.dateTo} destinationId={plan.destionationid} />
                        )}
                    </div>
                </div>
                <div className="plan-data-container">
                    <h1 className="plan-name">{plan.plan_name}</h1>
                    <p className="plan-user">
                        {plan.userid && plan.userid.endsWith("BOT") ? (
                            <>
                                <i className="bi bi-stars"></i>
                                Generated with AI
                            </>
                        ) : (
                            <>
                                <i className="bi bi-feather"></i>
                                <Link to={`/user/${plan.userid}`}>{user.username}</Link>
                            </>
                        )}
                    </p>
                    <p className="plan-date">
                        {plan.dateFrom === plan.dateTo ?
                            `${plan.date_from} - ${getNextMonth(plan.dateFrom)}` :
                            `${plan.date_from} - ${plan.date_to}`
                        }
                    </p>
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

export default SavedPlan;