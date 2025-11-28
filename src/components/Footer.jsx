import "../style/Footer.css";
import "../style/Responsive/FooterResponsive.css";
import Fondo from "../assets/fondo_footer.svg";
import Logo from "../assets/Logo_blanco.svg";
import { Button } from "primereact/button";
import { FaFacebookF, FaTiktok, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Función para hacer scroll suave a las secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Enlaces de redes sociales
  const handleSocialClick = (platform) => {
    const links = {
      facebook: 'https://www.facebook.com/devpathdesarrolloweb', // Cambia por tu página real
      tiktok: '#', // Cambia por tu cuenta real
      whatsapp: '#' // Cambia por tu número real
    };
    
    window.open(links[platform], '_blank');
  };

  return (
    <>
      <div className="container_footer">
        <div className="fondo_footer">
          <img src={Fondo} alt="" className="fondo_degradado_footer"/>
          <div className="logo_mikrotik_footer">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="dos_partes_footer flex">
          <div className="lado_izquierdo">
            <h2>Conectate con nosotros para empezar a trabajar juntos!</h2>
            <div className="buton_leer_mas button_footer_leermas">
              <a href="#" target="_blank">
                <Button>Leer más</Button>
              </a>
            </div>
          </div>
          <div className="lado_derecho flex">
            <div className="link">
                <h3>Links</h3>
                <ul>
                    <li onClick={() => scrollToSection('caracteristicas')} className="footer-link">
                      Características
                    </li>
                    <li onClick={() => scrollToSection('sobre-nosotros')} className="footer-link">
                      Sobre Nosotros
                    </li>
                    <li onClick={() => scrollToSection('servicios')} className="footer-link">
                      Servicios
                    </li>
                </ul>
            </div>
            <div className="contacto">
                <h3>Ponte en Contacto</h3>
                <div className="location mt-4 flex">
                    <i className="pi pi-map-marker"></i>
                    <p className="ml-2">Dirección: Av. Cualquera 123, San Luis</p>
                </div>
                <div className="email mt-4 flex">
                    <i className="pi pi-envelope"></i>
                    <p className="ml-2">Correo: aguirreandrea457@gmail.com</p>
                </div>
                <div className="phone mt-4 flex">
                    <i className="pi pi-phone"></i>
                    <p className="ml-2">Teléfono: (01) 680-8000</p>
                </div>

                <div className="redes_sociales">
                    <div 
                      className="social-icon facebook" 
                      onClick={() => handleSocialClick('facebook')}
                    >
                      <FaFacebookF className="icon" size={20} />
                    </div>
                    <div 
                      className="social-icon tiktok" 
                      onClick={() => handleSocialClick('tiktok')}
                    >
                      <FaTiktok className="icon" size={20} />
                    </div>
                    <div 
                      className="social-icon whatsapp" 
                      onClick={() => handleSocialClick('whatsapp')}
                    >
                      <FaWhatsapp className="icon" size={20} />
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2025 by ACeleste All Right Reserved</p>
        </div>
      </div>
    </>
  );
}