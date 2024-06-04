import React, { useState } from 'react';
import '../assets/styles/Register.css';
import { useNavigate } from 'react-router-dom';
import{ ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let userData = {
            'username': formData.username,
            'password': formData.password
        }

        loginUser(userData);
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn">Log In</button>
                </form>
                <button className="btn login-btn" onClick={handleRegisterClick}>Register</button>
            </div>
            <ToastContainer />
        </div>
    );
}

async function loginUser(userData) {
    await fetch('http://localhost:6500/user/loginUser', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
        credentials: 'include'
    }).then(async response => {
        let serverResposnse = await response.json();
        if (response.ok) {
            toast.success("Signed in successfully!", {autoClose: 1500});
            setTimeout(() => {
              window.location.href = '/vprasalnik';
            }, 2000);
            return serverResposnse
        } else{
            toast.error(serverResposnse.message);
        }
    }).catch(error => {
        console.error('Error:', error);
    });
}



export default Login;
