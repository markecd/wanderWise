import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forum from "../components/Forum";
import Plans from "../components/Plans";
import { useParams } from "react-router-dom";


function PlanPage() {
    const { id } = useParams();
    return(
        <div className="planpage">
            <Navbar />
            <div>
                <p>Plans for {id}</p>
               <Plans id={id} />
               <Forum />
            </div>
            <Footer />
        </div>
    )
}

export default PlanPage;