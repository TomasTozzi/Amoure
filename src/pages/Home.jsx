import { useState, useEffect } from "react";
import About from "../components/About";
import Servicios from "../components/Servicios";
import LogoRojo from "../assets/PNG's/Logotipos/AmouréSolo_3.Logotipo Rojo.png";

function Home() {
  const [loading, setLoading] = useState(true); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader mb-6 mx-auto"></div>
          <p className="text-lg font-semibold text-gray-700 animate-pulse">
            Cargando la mejor experiencia de viaje...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-hat scroll-smooth">
      <div className="relative bg-home2 bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-65"></div>
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
        <button
          onClick={handleOpenModal}
          className="bg-white text-rojo font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Cotiza tu viaje
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Elija su próximo destino</h2>
            <button
              onClick={handleCloseModal}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Servicios />

      <div className="h-auto bg-gradient-to-r from-red-700 via-rose-400 to-pink-300 flex flex-col items-center justify-center text-center my-10 py-10 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
  <h3 className="text-white text-3xl font-extrabold mb-4">
    ¿Te interesa nuestra propuesta? 🌟
  </h3>
  <p className="text-white text-lg mb-6 max-w-md">
    ¡Únete a nuestro equipo y construye experiencias inolvidables con
    nosotros! No pierdas la oportunidad de trabajar en algo grandioso.
  </p>
  <a
    href="#contacto"
    className="bg-white text-red-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 animate-bounce"
  >
    ¡Contáctanos!
  </a>
</div>

    </div>
  );
}

export default Home;
