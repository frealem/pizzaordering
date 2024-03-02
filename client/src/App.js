import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/menu" element={<Menu/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
       </Routes>
      <Footer/>

    </Router>
  );
};

export default App;


