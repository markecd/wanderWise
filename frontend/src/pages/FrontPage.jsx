import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Destination from "../components/Destination";
import '../assets/styles/FrontPage.css';

function FrontPage() {
    return (
        <div className="frontpage">
            <Navbar />
            <Destination />
            <Footer />
        </div>
    )
}

export default FrontPage;