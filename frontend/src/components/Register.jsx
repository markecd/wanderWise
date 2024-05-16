import React, { useState } from 'react';
import '../assets/styles/Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
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
      console.log("Name should contain only upper and lower case letters")//toast zraven tega polja
      dataOk = false;
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[\d!@#$%^&*\-_]).{6,}/.test(formData.password)) {
      console.log("Password must be at least 6 characters long and contain at least 1 uppercase letter, 1 lowercase letter, and 1 number or symbol");
      dataOk = false;
    }

    let usernameExists = await checkUsername(formData.username);

    if (usernameExists) {
      console.log("Username already exists!");
      dataOk = false;
    };

    if (!dataOk) {
      console.log("ni šlo skoz")
      return;
    } else {
      let userData = {
        'name': formData.name,
        'username': formData.username,
        'password': formData.password
      }
      registerUser(userData);
    }



    console.log('Form data submitted:', formData);
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
      window.location.href = '/login';
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
