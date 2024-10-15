import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Mapa from "./Mapa";

function Footer() {
  return (
    <footer className="bg-red-600 text-white py-12">
      <div className="container mx-auto lg:flex lg:flex-row-reverse justify-evenly   ">

        
        {/* Sección del mapa centrada */}
        <div className=" flex flex-col items-center ">
          <div className="rounded-lg overflow-hidden shadow-lg w-full lg:w-2/3 transition-transform transform hover:scale-105">
            
            <Mapa />
          </div>
        </div>

        {/* Sección de contacto */}
        <div className="flex flex-col  ml-6 mb-10 lg:h-1/2 lg:gap-6 lg:m-auto">
          <h2 className="text-4xl font-semibold my-6">Contáctanos</h2>
          <div className="flex flex-col text-lg ">
            <div className="   space-y-6">
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-3 text-gray-300" />
              <span className="hover:text-white transition-colors">
                Av. Callao 600, CABA{" "}
              </span>
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-3 text-gray-300" />
              <span className="hover:text-white transition-colors">
                Amoure@gmail.com
              </span>
            </p>
            </div>
            <div >
                <h3 className="text-2xl font-semibold my-4">Seguinos en nuestras redes</h3>
            <div className="flex space-x-4    ">
              
              
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white text-3xl hover:text-green-400 transition-colors duration-300 ease-in-out">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/amoure_ar?igsh=MTBrZjVoaDV5OXQzcg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-3xl hover:text-pink-400 transition-colors duration-300 ease-in-out">
                            <FaInstagram />
                        </a>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-6 lg:w-auto lg:h-full   my-auto">
        <img
          src="https://i.postimg.cc/ry1VSDb0/Amour-1-Isotipo-rojo-fondo-crema.png"
          alt="logo"
          className="w-[50%] h-[50%] object-cover"
        />
      </div>
    
      </div>



      {/* Sección de derechos de autor */}
      <div className="mt-6 border-t border-red-500 pt-6 text-center">
        <p className="text-sm text-gray-200">
          &copy; 2023 Amoure. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
