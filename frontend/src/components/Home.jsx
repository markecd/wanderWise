import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/Home.css';


function Home() {
    return (
        <div className="home-container">
            <video autoPlay muted loop className="background-video">
                <source src="/videos/8820216-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1>Welcome to WanderWise</h1>
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </div>
        </div>
    );
}

export default Home;