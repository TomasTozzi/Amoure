import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importamos los iconos

function Footer() {
    return (
        <>
            <footer className="bg-rojo text-white text-center p-4">
                <div className="flex justify-center space-x-6 mb-4">
                    <a
                        href="https://wa.me/1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                        className="text-white text-2xl hover:text-green-500 transition duration-300"
                    >
                        <FaWhatsapp />
                    </a>
                    <a
                        href="https://www.instagram.com/amoure_ar?igsh=MTBrZjVoaDV5OXQzcg%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-white text-2xl hover:text-pink-500 transition duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:Amoure@gmail.com"
                        aria-label="Email"
                        className="text-white text-2xl hover:text-blue-500 transition duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>
                <p>© 2023 Amoure. Todos los derechos reservados.</p>
            </footer>
        </>
    );
}

export default Footer;
