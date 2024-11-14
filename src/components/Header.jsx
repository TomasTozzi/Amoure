import { useState, useEffect } from "react";
import LogoRojo from "../assets/PNG's/Logotipos/Amouré_3.LogotipoRojo.png";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnReservationPage, setIsOnReservationPage] = useState(false);

  useEffect(() => {
    // Verifica si el usuario está en la página de reserva
    if (window.location.pathname.includes("/reserva")) {
      setIsOnReservationPage(true);
    } else {
      setIsOnReservationPage(false);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="inicio" className="bg-rosa fixed top-0 right-0 left-0 z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoRojo} alt="LogoRojo" className="h-10" />
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-white dark:hover:bg-rojo dark:focus:ring-rojo"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } w-full md:max-h-full md:opacity-100 md:block md:w-auto transition-all duration-500 ease-in-out overflow-hidden`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="/"
                className="text-rojo font-nexa font-semibold"
                aria-current="page"
              >
                Inicio
              </a>
            </li>

            <li>
              <a
                href="#servicios"
                className={`${
                  isOnReservationPage
                    ? "text-gray-400 cursor-not-allowed" // Color gris cuando está desactivado
                    : "text-rojo"
                } font-nexa font-semibold transition duration-300`}
                aria-disabled={isOnReservationPage ? "true" : "false"}
              >
                Servicios
              </a>
            </li>

            <li>
              <a href="#contacto" className="text-rojo font-nexa font-semibold">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
