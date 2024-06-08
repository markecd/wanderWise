import React, { useState } from 'react';
import '../assets/styles/Register.css';
import { useNavigate } from 'react-router-dom';
import{ ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataOk = true;

    if (!/^[A-Za-z]+$/.test(formData.name)) {
      toast.error("Name should contain only upper and lower case letters!");
      dataOk = false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*\-_]).{6,}/.test(formData.password)) {
      toast.error("Password must be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol!");
      dataOk = false;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)) {
      toast.error("Invalid email format!");
      dataOk = false;
    }

    let usernameExists = await checkUsername(formData.username);

    if (usernameExists) {
      toast.error("Username already exists!");
      dataOk = false;
    };

    if (!dataOk) {
      return;
    } else {
      let userData = {
        'name': formData.name,
        'username': formData.username,
        'password': formData.password,
        'email': formData.email
      }
      console.log(userData);
      registerUser(userData);
      
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            <label htmlFor="username">E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
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
          <button type="submit" className="btn">Register</button>
        </form>
        <button className="btn login-btn" onClick={handleLoginClick}>Log In</button>
      </div>
      <ToastContainer />
    </div>
  );
}

async function registerUser(userData) {
  fetch('http://localhost:6500/user/registerUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  }).then(async response => {
    if (response.ok) {
      toast.success("Registered successfully!", {autoClose: 1500});
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
      return response.json()
    }
  }).catch(error => {
    console.error('Error:', error);
  });
}

async function checkUsername(username) {
  try {

    let usernameData = {
      'username': username
    }

    let usernameExists;

    await fetch('http://localhost:6500/user/usernameExists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usernameData)
    }).then(async response => {
      return response.json();
    }).then(result => {
      usernameExists = result;
      return usernameExists;
    })

    if (usernameExists == 1) {
      return true;
    }
    else {
      return false;
    }
  }
  catch (err) {
    console.error('Error:', err);
    return;
  }
}

export default Register;
