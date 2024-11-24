import React from "react";
import { User, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="homepage__navbar bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800">EducaTIC36</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-20">
            <Link to="/home" className="nav-link">Home</Link>
            <Link to="/learning" className="nav-link">Disciplinas</Link>
            <Link to="/subjects" className="nav-link">Aprendizagem</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="icon-button" aria-label="Usuário">
              <User className="h-5 w-5" />
            </button>
            <button className="icon-button" aria-label="Configurações">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
