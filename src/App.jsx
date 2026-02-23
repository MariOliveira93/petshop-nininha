import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Carrossel from './Carrossel'; 
import Footer from './Footer';
import Creche from './Creche'; 
import Hotelzinho from './Hotelzinho';
import Banho from './Banho';
import Contato from './Contato'; // 1. Certifique-se que esta linha existe!

function App() {
  return (
    <div className="container-geral">
      <nav className="navbar">
        <h1 className="logo">PetShop Nininha 🐾</h1>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/creche">Creche</Link></li>
          <li><Link to="/hotelzinho">Hotelzinho</Link></li>
          <li><Link to="/banho-tosa">Banho & Tosa</Link></li>
          <li><Link to="/contato">Contato</Link></li> {/* 2. Link adicionado aqui */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <header className="hero">
              <h2>Onde o carinho pelo seu pet encontra a melhor qualidade.</h2>
            </header>
            <Carrossel />
          </>
        } />
        
        <Route path="/creche" element={<Creche />} />
        <Route path="/hotelzinho" element={<Hotelzinho />} />
        <Route path="/banho-tosa" element={<Banho />} />
        
        {/* 3. Rota de Contato adicionada aqui */}
        <Route path="/contato" element={<Contato />} /> 
      </Routes>

      <Footer />
    </div>
  );
}

export default App;