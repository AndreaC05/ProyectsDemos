import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CardCaracteristica from "../components/CardCaracteristica.jsx";
import CardServices from "../components/CardServices.jsx";
import Video from "../assets/Video/VIDEO.mp4";
import HojaRoto from "../assets/hoja.png";
import Degradado from "../assets/degradado.svg";
import style from "../assets/style.svg";
import "../Style/Inicio.css";
import "../Style/Responsive/InicioResponsive.css";
import Alta from "../assets/Caracteristicas/feature1.jpg";
import Enfoque from "../assets/Caracteristicas/feature2.jpg";
import Pensamiento from "../assets/Caracteristicas/feature3.jpg";
import Equipo from "../assets/Caracteristicas/feature4.jpg";
import { Button } from "primereact/button";
import Imagen1 from "../assets/SobreNosotros/Image1.png";
import Imagen2 from "../assets/SobreNosotros/Image2.png";

export default function Inicio() {
  const [counter, setCounter] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const animateCounter = () => {
    let start = 0;
    const end = 8;
    const duration = 2000;
    const increment = end / (duration / 50);

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
          <section className="section_caracteristicas" id="caracteristicas">
            <div className="text_caracteristicas">
              <h3>NUESTRAS CARACTERÍSTICAS</h3>
              <h2>Desarrollo web profesional a tu medida</h2>
            </div>
            <div className="cards">
              <CardCaracteristica
                imagen={Alta}
                titulo="Diseño Moderno"
                descripcion="Sitios web atractivos y funcionales con las últimas tendencias."
              />
              <CardCaracteristica
                imagen={Enfoque}
                titulo="Enfoque en resultados"
                descripcion="Tu éxito digital es nuestra máxima prioridad."
              />
              <CardCaracteristica
                imagen={Pensamiento}
                titulo="Soluciones Innovadoras"
                descripcion="Tecnología de vanguardia para impulsar tu negocio."
              />
              <CardCaracteristica
                imagen={Equipo}
                titulo="Equipo Especializado"
                descripcion="Desarrolladores expertos comprometidos con tu proyecto."
              />
            </div>
          </section>
          
          <section className="sobre_nosotros" id="sobre-nosotros">
            <img src={Degradado} alt="" className="img_degradado" />
            <div className="style_puntos floating-style">
              <img src={style} alt="" />
            </div>
            <div className="body_sobre_nosotros flex">
              <div className="sobre_nosotros_izquierdo">
                <h3>SOBRE NOSOTROS</h3>
                <h2>Tu socio en desarrollo web y transformación digital</h2>
                <p className="text_nosotros">
                  Creamos experiencias digitales excepcionales que impulsan el 
                  crecimiento de tu negocio. Desarrollamos sitios web modernos, 
                  aplicaciones web y soluciones e-commerce que conectan tu marca 
                  con tus clientes.
                </p>
                <div className="seccion_identidad">
                  <div className="identidad_mikrotik">
                    <h4>Nuestra Propuesta de Valor</h4>
                    <div className="list_identidad">
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Diseño UI/UX centrado en el usuario</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Desarrollo responsive y optimizado</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>SEO y estrategia de contenidos</p>
                      </div>
                      <div className="identidad flex">
                        <i className="pi pi-check-circle"></i>
                        <p>Soporte y mantenimiento continuo</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="buton_leer_mas">
                  <a href="#" target="_blank">
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
          
          <section className="servicios" id="servicios">
            <div className="text_servicios">
              <h3>NUESTROS SERVICIOS</h3>
              <h2>
                Soluciones web completas para llevar tu negocio al siguiente nivel
              </h2>
            </div>
            <div className="card_services">
              <CardServices
                numero="1"
                titulo="Páginas Web Corporativas"
                descripcion="Sitios web profesionales que reflejan la identidad de tu marca. Diseño responsive, optimizado para SEO y con la mejor experiencia de usuario."
              />
              <CardServices
                numero="2"
                titulo="Tiendas Online (E-commerce)"
                descripcion="Plataformas de venta online completas con carrito de compras, pasarelas de pago y gestión de inventario para hacer crecer tu negocio."
              />
              <CardServices
                numero="3"
                titulo="Aplicaciones Web"
                descripcion="Desarrollamos aplicaciones web personalizadas con tecnologías modernas como React, Node.js y bases de datos en la nube."
              />
              <CardServices
                numero="4"
                titulo="Landing Pages"
                descripcion="Páginas de aterrizaje optimizadas para conversión, perfectas para campañas de marketing digital y captación de clientes."
              />
              <CardServices
                numero="5"
                titulo="Mantenimiento y Soporte"
                descripcion="Actualizaciones, mejoras continuas y soporte técnico para mantener tu sitio web seguro, rápido y funcionando perfectamente."
              />
            </div>
          </section>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}