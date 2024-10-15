import { useState, useEffect } from "react";
import About from "../components/About";
import Servicios from "../components/Servicios";
import LogoRojo from "../assets/PNG's/Logotipos/AmouréSolo_3.Logotipo Rojo.png";

function Home() {
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Simula un tiempo de carga para la pantalla de carga
    const timer = setTimeout(() => {
      setLoading(false); // Oculta la pantalla de carga después de 2 segundos
    }, 2000); // Ajusta el tiempo según sea necesario

    // Realiza scroll al inicio al montar el componente
    window.scrollTo(0, 0);

    return () => clearTimeout(timer); // Limpia el timeout cuando se desmonte
  }, []);

  if (loading) {
    // Pantalla de carga mejorada
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader mb-6"></div> {/* Spinner animado */}
          <p className="text-lg font-semibold text-gray-700 animate-pulse">
            Cargando la mejor experiencia de viaje...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-hat scroll-smooth ">
      <div className="relative bg-home2 bg-cover bg-center ">
        {/* Capa con opacidad */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        {/* Contenido */}
        <div className="relative font-hat flex flex-col items-center justify-center z-10 m-10 h-[40vh] md:h-[70vh]">
          <img src={LogoRojo} alt="Logo Amouré" className="h-24" />
          <p className="text-white text-center text-xl">
            El primer <span className="text-rosa font-bold">'SI'</span> lo das
            con <span className="text-rosa font-bold">AMIGOS</span>{" "}
          </p>
          <a
            href="#contacto"
            className="hidden md:block bg-white text-rojo font-semibold py-2 mt-10 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Contáctanos
          </a>
        </div>
      </div>
      <About />
      <div className="h-auto bg-rojo flex flex-col items-center justify-center text-center mb-10 p-6 rounded-lg shadow-lg">
        <h3 className="text-white text-2xl font-bold mb-4">
          ¿Te vas a perder la oportunidad de experimentar el mejor viaje de tu
          vida?
        </h3>
        <p className="text-white text-lg mb-6">
          Contáctanos y cotiza YA tu viaje, ¡no dejes pasar esta experiencia
          única!
        </p>
        <a
          href="#contacto"
          className="bg-white text-rojo font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Cotiza tu viaje
        </a>
      </div>

      <Servicios />
    </div>
  );
}

export default Home;
