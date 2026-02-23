// src/components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-orange-600 p-4 shadow-md"> {/* Navbar com fundo laranja vibrante */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo do PetShop Nininha */}
        <a href="/" className="text-white text-3xl font-bold flex items-center">
          PetShop Nininha 🐾
        </a>

        {/* Links de Navegação */}
        <ul className="flex space-x-6">
          <li>
            <a href="/creche" className="text-white hover:text-orange-200 transition duration-300 text-lg">
              Creche
            </a>
          </li>
          <li>
            <a href="/hotel" className="text-white hover:text-orange-200 transition duration-300 text-lg">
              Hotelzinho
            </a>
          </li>
          <li>
            <a href="/servicos" className="text-white hover:text-orange-200 transition duration-300 text-lg">
              Serviços
            </a>
          </li>
          <li>
            <a href="/agendamento" className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold hover:bg-orange-100 transition duration-300">
              Agendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;