import About from "../components/About";


function Home() {
  return (
    <div>
      <div className="relative bg-home bg-cover bg-center ">
        {/* Capa con opacidad */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Contenido */}
        <div className="relative font-hat flex flex-col items-center justify-center z-10 py-3 h-[40vh]">
          <h1 className="text-rojo text-center text-7xl">Amoure</h1>
          <p className="text-white text-center text-xl">
            El primer <span className="text-rojo font-bold">'SI'</span> lo das con <span className="text-rojo font-bold">AMIGOS</span>{" "}
          </p>
          <button className="hidden">Contactanos</button>
        </div>
      </div>
      <About/>
    </div>
  );
}

export default Home;
