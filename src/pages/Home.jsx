import About from "../components/About";
import Servicios from "../components/Servicios";
import LogoRojo from "../assets/PNG's/Logotipos/AmouréSolo_3.Logotipo Rojo.png"


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
            El primer <span className="text-rosa font-bold">'SI'</span> lo das con <span className="text-rosa font-bold">AMIGOS</span>{" "}
          </p>
          <button className="hidden">Contactanos</button>
        </div>
      </div>
      <About/>
      <Servicios/>
    </div>
  );
}

export default Home;
