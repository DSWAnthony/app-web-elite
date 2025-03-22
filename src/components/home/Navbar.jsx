import React from "react";
import logo from '../../assets/logo-elite.png';
import '../../styles/navbar.css'; // Archivo CSS para estilos personalizados

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img 
            src={logo} 
            alt="Logo de la empresa" 
            className="navbar-logo" 
          />
        </a>
        {/* Ítems de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item mx-3">
              <a className="nav-link fs-5" href="#inicio">
                Inicio
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fs-5" href="#nosotros">
                Nosotros
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fs-5" href="#servicios">
                Servicios
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fs-5" href="#historia">
                Historia
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link fs-5" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;