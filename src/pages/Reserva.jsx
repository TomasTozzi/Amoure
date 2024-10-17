import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Servicios from "../components/servicio";
import ContactForm from "../components/Contact.Form";
import BackButton from "../components/BackButton";

// Datos de ejemplo
const reviews = [
  {
    name: "Juan Pérez",
    rating: 5,
    comment: "Excelente servicio, lo recomiendo!",
  },
  {
    name: "María García",
    rating: 4,
    comment: "Muy buen servicio, aunque la atención podría mejorar.",
  },
];

const beneficios = [
  "Transporte incluido",
  "Alojamiento de primera clase",
  "Actividades guiadas",
  "Servicio de atención 24/7",
];

const renderStars = (rating) => {
  return Array(rating)
    .fill("★")
    .concat(Array(5 - rating).fill("☆"))
    .join(" ");
};

function Reserva() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // Estado de carga
  const servicio = Servicios.servicios.find(
    (servicio) => servicio.id === parseInt(id)
  );

  // Simulamos una galería de imágenes, puedes cambiar esto por una propiedad real
  const galleryImages = [
    servicio?.img,
    servicio?.img,
    servicio?.img,
    servicio?.img,
    servicio?.img,
  ];

  // Hook para hacer scroll al top al cargar el componente
  useEffect(() => {
    window.scrollTo(0, 0); // Desplaza el viewport al tope de la página
    // Simulación de carga
    const timer = setTimeout(() => {
      setLoading(false); // Oculta la pantalla de carga después de 2 segundos
    }, 2000); // Puedes ajustar el tiempo según sea necesario

    return () => clearTimeout(timer); // Limpia el timeout cuando el componente se desmonte
  }, []);

  if (loading) {
    // Pantalla de carga mejorada
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-center">
          <div className="loader mb-6 mx-auto"></div> {/* Spinner animado centrado */}
          <p className="text-lg font-semibold text-gray-700 animate-pulse">
            Cargando la mejor experiencia de viaje...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-20 px-4">
      <div className="m-4">
        <BackButton />
      </div>
      {/* Título del servicio alineado a la izquierda */}
      <h1 className="text-4xl font-bold text-left text-gray-800 mb-6">
        {servicio?.nombre}
      </h1>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Imagen grande a la izquierda */}
        <div className="w-full h-64 md:h-auto">
          <img
            src={galleryImages[0]} // Imagen principal
            alt="Imagen principal"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Cuatro imágenes a la derecha */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 h-full">
          {galleryImages.slice(1).map((img, index) => (
            <div key={index} className="w-full h-64">
              <img
                src={img}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Descripción del servicio */}
      <div className="bg-white flex flex-col items-center lg:flex-row p-6 rounded-lg shadow-md text-left mb-8 flex ">
        <div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {servicio?.descripcion}
          </p>
          {/* Beneficios del servicio */}
          <div className="bg-white p-6 rounded-lg shadow-md text-left mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Beneficios del Servicio
            </h2>
            <ul className="list-disc pl-6 text-gray-600">
              {beneficios.map((beneficio, index) => (
                <li key={index} className="mb-2">
                  {beneficio}
                </li>
              ))}
            </ul>
          </div>

          {/* Reseñas de Clientes */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Reseñas de Clientes
            </h2>
            {reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p className="text-lg font-semibold text-gray-700">
                  {review.name}
                </p>
                <p className="text-yellow-500">{renderStars(review.rating)}</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default Reserva;
