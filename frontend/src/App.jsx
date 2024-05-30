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
import RequireAuth from './components/RequireAuth';
import PlanPage from './pages/PlanPage';
import Plan from './pages/Plan';
import UserPage from './pages/UserPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
		<Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />		
        <Route path="/vprasalnik" element={<RequireAuth><Vprasalnik /></RequireAuth>} />
        <Route path="/frontpage" element={<RequireAuth><FrontPage /></RequireAuth>} />    
        <Route path="/planpage/:id" element={<RequireAuth><PlanPage /></RequireAuth>}/>
        <Route path="/plan/:id" element={<RequireAuth><Plan /></RequireAuth>}/>
        <Route path="/user/:id" element={<RequireAuth><UserPage /></RequireAuth>}/>
      </Routes>
    </Router>
  );
}

export default App