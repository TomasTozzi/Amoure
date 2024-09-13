import { Link } from "react-router-dom";
import foto from "../assets/baner-home.jpg";
import Servicios from "./servicio.json";
function CardServicio() {
  return (
    // Ajusta la ruta si es necesario

    <div className="grid gap-8 px-4  py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Servicios.servicios.map((servicio) => (
        <div key={servicio.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={foto}
            alt={servicio.nombre}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-rojo mb-2">{servicio.nombre}</h2>
            <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
            <Link  className="text-rojo  px-4 py-2 underline"> VER MAS </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardServicio;
                                           