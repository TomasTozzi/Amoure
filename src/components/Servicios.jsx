import CardServicio from "./CardServicio"

function Servicios() {
  return (
    <section id="servicios" className="flex flex-col items-center justify-center  gap-4">
      <h2 className="text-4xl text-rojo text-center font-semibold">Nuestros Servicios</h2>
      <hr className="bg-rojo h-[3px] w-[30vw]" />
      <CardServicio />
    </section>
  )
}

export default Servicios