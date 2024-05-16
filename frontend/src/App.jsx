import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Vprasalnik from './components/Vprasalnik';
import FrontPage from './pages/FrontPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';

function App() {
	return (
	<Router>
		<div>
			<Navbar />	
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/vprasalnik" element={<Vprasalnik />} />
				<Route path="/frontpage" element={<FrontPage />} />
			</Routes>
			<Footer />
		</div>
	</Router>
  );
}

export default App