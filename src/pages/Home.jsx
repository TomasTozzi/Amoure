import About from "../components/About";
import Servicios from "../components/Servicios";


function Home() {
  return (
    <div className="font-hat scroll-smooth ">
      <div className="relative bg-home  bg-cover bg-center ">
        {/* Capa con opacidad */}
        <div className="absolute inset-0 bg-black opacity-65"></div>
        {/* Contenido */}
        <div className="relative font-hat flex flex-col items-center justify-center z-10 py-3 h-[40vh]">
          <h1 className="text-celeste text-center text-7xl">Amoure</h1>
          <p className="text-white text-center text-xl">
            El primer <span className="text-celeste font-bold">'SI'</span> lo das con <span className="text-celeste font-bold">AMIGOS</span>{" "}
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
