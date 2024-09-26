import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Mapa from './Mapa';

function Footer() {
    return (
        <footer className="bg-red-600 text-white py-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 lg:px-0">

                {/* Sección del mapa centrada */}
                <div className="lg:col-span-2 flex flex-col items-center">
                    
                    <div className="rounded-lg overflow-hidden shadow-lg w-full lg:w-2/3 transition-transform transform hover:scale-105">
                        <Mapa />
                    </div>
                </div>

                {/* Sección de contacto */}
                <div className="flex flex-col items-start lg:items-center">
                    <h2 className="text-2xl font-semibold mb-6">Contáctanos</h2>
                    <div className="flex flex-col space-y-3 text-lg">
                        <p className="flex items-center">
                            <FaPhone className="mr-3 text-gray-300" />
                            <span className="hover:text-white transition-colors">123-456-7890</span>
                        </p>
                        <p className="flex items-center">
                            <FaMapMarkerAlt className="mr-3 text-gray-300" />
                            <span className="hover:text-white transition-colors">Calle Falsa 123, Ciudad</span>
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope className="mr-3 text-gray-300" />
                            <span className="hover:text-white transition-colors">Amoure@gmail.com</span>
                        </p>
                    </div>
                </div>

                {/* Sección de redes sociales */}
                <div className="flex flex-col items-start lg:items-center">
                    <h2 className="text-2xl font-semibold mb-6">Síguenos</h2>
                    <div className="flex space-x-8">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white text-3xl hover:text-green-400 transition-colors duration-300 ease-in-out">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/amoure_ar?igsh=MTBrZjVoaDV5OXQzcg%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white text-3xl hover:text-pink-400 transition-colors duration-300 ease-in-out">
                            <FaInstagram />
                        </a>
                        <a href="mailto:Amoure@gmail.com" aria-label="Email" className="text-white text-3xl hover:text-blue-400 transition-colors duration-300 ease-in-out">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            {/* Logo centrado */}
            <div className="flex justify-center mt-12">
                <img src="https://i.postimg.cc/ry1VSDb0/Amour-1-Isotipo-rojo-fondo-crema.png" alt="logo" className="w-32 h-auto" />
            </div>

            {/* Sección de derechos de autor */}
            <div className="mt-6 border-t border-red-500 pt-6 text-center">
                <p className="text-sm text-gray-200">&copy; 2023 Amoure. Todos los derechos reservados.</p>
                
            </div>
        </footer>
    );
}

export default Footer;
