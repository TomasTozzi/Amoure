import { Link } from "react-router-dom";
import Servicios from "./servicio.json";

function CardServicio() {
  return (
    <div className="grid gap-8 px-4 py-8 sm:grid-cols-1 md:grid-cols-3">
      {Servicios.servicios.map((servicio) => (
        <div key={servicio.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={servicio.img}
            alt={servicio.nombre}
            className="w-full h-48 object-cover object-top"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-rojo mb-2">{servicio.nombre}</h2>
            <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
            <Link to={`/reserva/${servicio.id}`} className="text-rojo px-4 py-2 underline">
              VER MÁS
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardServicio;
