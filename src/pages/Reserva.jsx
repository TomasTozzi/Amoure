import { useParams } from "react-router-dom";
import Servicios from "../components/servicio";
import ContactForm from "../components/Contact.Form";

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

  return (
    <div className="container  mx-auto mt-20 px-4">
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
              {" "}
              {/* Ajustamos la altura aquí */}
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
