'use client';

import React, { useState } from 'react';
import { MdPerson, MdLogout } from 'react-icons/md';
import { useRouter } from 'next/router'; 

const NavbarOficina = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-orange-600 text-white shadow-md">
        {/* Ícone para abrir o menu lateral */}
        <div className="flex items-center flex-grow">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Logo centralizada */}
        <div className="flex justify-center flex-grow-0">
          <a href="/">
            <img src="/logogrande.png" alt="Logo" className="h-10" />
          </a>
        </div>

        {/* Opções à direita (Perfil com menu dropdown) */}
        <div className="relative flex items-center flex-grow justify-end">
          <button onClick={toggleProfileMenu} className="text-white flex items-center focus:outline-none">
            <MdPerson className="w-6 h-6 mr-2" />
            <span></span>
          </button>

          {/* Menu Dropdown */}
          {isProfileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-orange-600 text-black border border-gray-300 rounded shadow-lg z-10">
              <a href="/oficina/perfil" className="block px-4 py-2 hover:bg-orange-200 flex items-center">
                <MdPerson className="w-5 h-5 mr-2" />
                <span>Perfil</span>
              </a>
              <a href="/login" className="block px-4 py-2 hover:bg-orange-200 flex items-center">
                <MdLogout className="w-5 h-5 mr-2" />
                <span>Logout</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Menu lateral */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-orange-600 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
          &times;
        </button>
        <div className="mt-12">
          <a href="/oficina/agenda" className="block py-2 px-4 hover:bg-gray-700">Agenda</a>
          <a href="/oficina/historico" className="block py-2 px-4 hover:bg-gray-700">Histórico</a>
          <a href="/oficina/informacoes" className="block py-2 px-4 hover:bg-gray-700">Informações</a>
        </div>
      </div>

      {/* Overlay para fechar o menu clicando fora dele */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default NavbarOficina;
