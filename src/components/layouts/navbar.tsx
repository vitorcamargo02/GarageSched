import React, { useState } from 'react';
import { MdPerson, MdLogout } from 'react-icons/md';

export default function Navbar() {
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
                <div className="flex items-center flex-grow">
                    <button onClick={toggleSidebar} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                <div className="flex justify-center flex-grow-0">
                    <a href="/">
                        <img src="/logogrande.png" alt="Logo" className="h-10" />
                    </a>
                </div>

                <div className="relative flex items-center flex-grow justify-end">
                    <button onClick={toggleProfileMenu} className="text-white flex items-center focus:outline-none">
                        <MdPerson className="w-6 h-6 mr-2" />
                        <span></span>
                    </button>

                    {isProfileMenuOpen && (
                        <div className="absolute right-0 top-full mt-2 w-48 bg-orange-600 text-black border border-gray-300 rounded shadow-lg z-10">
                            <a href="/perfil" className="block px-4 py-2 hover:bg-orange-200 flex items-center">
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

            {isSidebarOpen && (
                <>
                    <div className="fixed top-0 left-0 w-64 h-full bg-orange-600 text-white transform translate-x-0 transition-transform duration-300 ease-in-out">
                        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white text-2xl focus:outline-none">
                            &times;
                        </button>
                        <div className="mt-12">
                            <a href="/veiculos" className="block py-2 px-4 hover:bg-gray-700">Veículos</a>
                            <a href="/agendamentos" className="block py-2 px-4 hover:bg-gray-700">Agendamentos</a>
                            <a href="/buscar-oficinas" className="block py-2 px-4 hover:bg-gray-700">Buscar Oficinas</a>
                            <a href="/chat" className="block py-2 px-4 hover:bg-gray-700">Chat</a>
                        </div>
                    </div>

                    <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleSidebar}></div>
                </>
            )}
        </>
    );
}
