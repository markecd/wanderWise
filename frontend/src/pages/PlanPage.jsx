import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Forum from "../components/Forum";
import Plans from "../components/Plans";
import ModalForm from "../components/Modal";
import { useParams } from "react-router-dom";
import '../assets/styles/PlanPage.css'; // Create and import this CSS file for additional styles if needed

function PlanPage() {
    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <div className="planpage">
            <Navbar />
            <div>
                <p>Available plans for {id}</p>
                <button className="btn-nacrt" onClick={openModal}>Dodaj</button>
                <Plans id={id} factor="destination" />
                <Forum />
            </div>
            <Footer />
            <ModalForm isOpen={modalIsOpen} onRequestClose={closeModal} />
        </div>
    );
}

export default PlanPage;
