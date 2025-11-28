import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CardCaracteristica from "../Components/CardCaracteristica";
import CardServices from "../Components/CardServices";
import Video from "../assets/Video/VIDEO_MIKROTIK.mp4";
import HojaRoto from "../assets/hoja.png";
import Degradado from "../assets/degradado.svg";
import style from "../assets/style.svg";
import "../Style/Inicio.css";
import "../Style/Responsive/InicioResponsive.css";
// import "../Style/BotonFlotanteChat.css";
import Alta from "../assets/Caracteristicas/feature1.jpg";
import Enfoque from "../assets/Caracteristicas/feature2.jpg";
import Pensamiento from "../assets/Caracteristicas/feature3.jpg";
import Equipo from "../assets/Caracteristicas/feature4.jpg";
import { Button } from "primereact/button";
import Imagen1 from "../assets/SobreNosotros/Image1.png";
import Imagen2 from "../assets/SobreNosotros/Image2.png";
// import BotonFlotanteChat from "../Components/BotonFlotanteChat";

export default function Inicio() {
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  // Hook para observar cuando la sección entra en viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter();
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  // Función para animar el contador
  const animateCounter = () => {
    let start = 0;
    const end = 11;
    const duration = 2000; // 2 segundos
    const increment = end / (duration / 50); // 50ms intervals

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCounter(end);
        clearInterval(timer);
      } else {
        setCounter(Math.floor(start));
      }
    }, 50);
  };

  return (
    <>
      <div className="container_principal">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="video_mikrotik">
          <video width="100%" autoPlay={true} muted loop>
            <source src={Video} type="video/mp4" />
            Tu navegador no soporta el elemento video.
          </video>
          <div className="torn-edge">
            <img src={HojaRoto} alt="" />
          </div>
        </div>
        <div className="body_mikrotik">
          {/* Agregamos ID a la sección de características */}
          <section className="section_caracteristicas" id="caracteristicas">
            <div className="text_caracteristicas">
              <h3>NUESTRAS CARACTERÍSTICAS</h3>
              <h2>Conexión ágil y sencilla para todos</h2>
            </div>
            <div className="cards">
              <CardCaracteristica
                imagen={Alta}
                titulo="Alta Calidad"
                descripcion="Ofrecemos un servicio confiable y de excelencia."
              />
              <CardCaracteristica
                imagen={Enfoque}
                titulo="Enfoque en las personas"
                descripcion="Tu conexión y satisfacción son nuestra prioridad."
              />
              <CardCaracteristica
                imagen={Pensamiento}
                titulo="Pensamiento Innovador"
                descripcion="Soluciones creativas para un mundo conectado."
              />
              <CardCaracteristica
                imagen={Equipo}
                titulo="Equipo Experto"
                descripcion="Profesionales listos para brindarte la mejor atención."
              />
            </div>
          </section>
          {/* Agregamos ID a la sección sobre nosotros */}
          <section className="sobre_nosotros" id="sobre-nosotros">
            <img src={Degradado} alt="" className="img_degradado" />
            <div className="style_puntos floating-style">
              <img src={style} alt="" />
            </div>
            <div className="body_sobre_nosotros flex">
              <div className="sobre_nosotros_izquierdo">
                <h3>SOBRE NOSOTROS</h3>
                <h2>Tu aliado en conectividad y tecnología</h2>
                <p className="text_nosotros">
                  Conectamos al Perú con internet rápido y soluciones
                  tecnológicas seguras, impulsando la productividad y la
                  innovación en todo el país.
                </p>
                <div className="seccion_identidad">
                  <div className="identidad_mikrotik">
                    <h4>Identidad MikrotikPerú</h4>
                    <div className="list_identidad">
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Estrategia de marca y posicionamiento</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Desarrollo de identidad corporativa</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Imagen visual y comunicación</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Estrategia comercial y de marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buton_leer_mas">
                  <a href="https://mikrotikperu.com.pe/" target="_blank">
                    <Button>Leer más</Button>
                  </a>
                </div>
              </div>
              <div className="sobre_nosotros_derecha">
                <div className="images_sobre_nosotros">
                  <img src={Imagen1} alt="" />
                  <img src={Imagen2} alt="" />
                  <div className="letter_experiencia flex" ref={counterRef}>
                    <p className="counter-number">{counter}+</p>
                    <p>Años de Experiencia</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Agregamos ID a la sección de servicios */}
          <section className="servicios" id="servicios">
            <div className="text_servicios">
              <h3>NUESTROS SERVICIOS</h3>
              <h2>
                Descubra nuestros destacados servicios de conectividad y
                tecnología
              </h2>
            </div>
            <div className="card_services">
              <CardServices
                numero="1"
                titulo="Fibra Óptica"
                descripcion="La fibra óptica hacia la comunicación del futuro. Con su capacidad bidireccional a través de filamentos TX y RX, desata una red de posibilidades sin igual."
              />
              <CardServices
                numero="2"
                titulo="Satelitales"
                descripcion="Conéctate sin límites con nuestro Internet Satelital: velocidad y confiabilidad para llevar tu negocio o entretenimiento a nuevas alturas."
              />
              <CardServices
                numero="3"
                titulo="Servicios VPN"
                descripcion="Navega seguro y sin restricciones con nuestro servicio VPN: Protege tus datos mientras exploras la web, con acceso a contenido global."
              />
              <CardServices
                numero="4"
                titulo="Contingencia de WAN'S"
                descripcion="Proteja la vitalidad de su empresa frente a interrupciones de conexión con nuestro servicio de Contingencia."
              />
              <CardServices
                numero="5"
                titulo="Plataforma Gestión WI-FI"
                descripcion="Conoce lo último en Gestión Wi-Fi con nuestra Plataforma. Su Empresa gestionará los acceso de clientes a la red Wi-Fi de manera masiva."
              />
            </div>
          </section>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      {/* <BotonFlotanteChat /> */}
    </>
  );
}