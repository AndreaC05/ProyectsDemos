import { useState } from "react";
import Logo from "../assets/Logo.svg";
import Fondo from "../assets/fondo_navbar.svg";
import "../Style/Navbar.css";
import "../Style/Responsive/NavbarResponsive.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar_principal flex">
        <img src={Logo} alt="" className="Logo_mikrotik" />
        
        {/* Botón menú contactos - solo visible en móvil */}
        <button 
          className="hamburger_menu" 
          onClick={toggleMenu}
          aria-label="Abrir menú de contactos"
        >
          <i className={`pi ${isMenuOpen ? 'pi-times' : 'pi-phone'}`}></i>
        </button>

        {/* Contactos */}
        <div className={`contactos ${isMenuOpen ? 'mobile_open' : ''}`}>
          <img src={Fondo} alt="" className="fondo_contactos" />
          <div className="numeros_contactos">
            <div className="flex numeros">
              <i className="pi pi-phone"></i>
              <p>(01) 640-8018</p>
              <p>0800 801 41</p>
              <p>999 046 598</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}