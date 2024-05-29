import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Vprasalnik from './components/Vprasalnik';
import FrontPage from './pages/FrontPage';
import Login from './components/Login';
import PlanPage from './pages/PlanPage';
import Plan from './pages/Plan';
import UserPage from './pages/UserPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vprasalnik" element={<Vprasalnik />} />
        <Route path="/frontpage" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/planpage/:id" element={<PlanPage />}/>
        <Route path="/plan/:id" element={<Plan />}/>
        <Route path="/user/:id" element={<UserPage />}/>
      </Routes>
    </Router>
  );
}

export default App