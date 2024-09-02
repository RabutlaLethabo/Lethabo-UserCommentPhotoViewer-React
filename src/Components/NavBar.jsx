import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-900 fixed top-0 w-full z-50 shadow-md">
            <div className="container mx-auto flex justify-center p-4">
                <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                        `text-white px-4 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-300`
                    }
                >
                    Home
                </NavLink>
                <NavLink 
                    to="/users" 
                    className={({ isActive }) => 
                        `text-white px-4 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-300`
                    }
                >
                    Users
                </NavLink>
                <NavLink 
                    to="/comments" 
                    className={({ isActive }) => 
                        `text-white px-4 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-300`
                    }
                >
                    Comments
                </NavLink>
                <NavLink 
                    to="/photos" 
                    className={({ isActive }) => 
                        `text-white px-4 py-2 rounded-md ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors duration-300`
                    }
                >
                    Photos
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
