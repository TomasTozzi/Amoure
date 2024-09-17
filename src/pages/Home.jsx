import About from "../components/About";
import Servicios from "../components/Servicios";
import LogoRojo from "../assets/PNG's/Logotipos/AmouréSolo_3.Logotipo Rojo.png";
import ContactForm from "../components/Contact.Form";
import Mapa from "../components/Mapa";

function Home() {
  return (
    <div className="font-hat scroll-smooth ">
      <div className="relative bg-home2 bg-cover bg-center ">
        {/* Capa con opacidad */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        {/* Contenido */}
        <div className="relative font-hat flex flex-col items-center justify-center z-10 mt-10  h-[40vh]">
          <img src={LogoRojo} alt="" className="h-24" />
          <p className="text-white text-center text-xl">
            El primer <span className="text-rosa font-bold">'SI'</span> lo das
            con <span className="text-rosa font-bold">AMIGOS</span>{" "}
          </p>
          <button className="hidden">Contactanos</button>
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
          href="/contacto"
          className="bg-white text-rojo font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
        >
          Cotiza tu viaje
        </a>
      </div>

      <Servicios />
      <div className="flex flex-col items-center md:flex-row-reverse">
        <ContactForm />
        <Mapa />
      </div>
    </div>
  );
}

export default Home;
