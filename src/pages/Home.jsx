function Home() {
  return (
    <div className="relative bg-home bg-cover bg-center ">
      {/* Capa con opacidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Contenido */}
      <div className="relative font-hat flex flex-col items-center justify-center z-10 py-3 h-[40vh]">
        <h1 className="text-bordo text-center text-7xl">Amoure</h1>
        <p className="text-white text-center text-xl">El primer SI lo das con maigos </p>
        <button className="hidden">Contactanos</button>
      </div>
    </div>
  );
}

export default Home;
