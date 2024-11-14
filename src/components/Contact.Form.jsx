import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    destino: 'Mendoza',
    cantidad: '',
    fechaInicio: '',
    fechaFin: '',
    nombre: '',
    telefono: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log('Datos del formulario:', formData);
  };

  return (
    <div className="max-w-md md:w-[100%] mx-auto p-6">
      <div className='flex flex-col items-center'>
        <h2 className="text-4xl font-semibold text-rojo text-center mb-6">Reserva tu viaje</h2>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Selección del destino */}
        <div className="md:col-span-2">
          <label htmlFor="destino" className="block text-lg font-medium text-gray-700">
            Destino:
          </label>
          <select
            name="destino"
            value={formData.destino}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
          >
            <option value="Mendoza">Mendoza</option>
            <option value="Bariloche">Bariloche</option>
          </select>
        </div>

        {/* Cantidad de personas */}
        <div>
          <label htmlFor="cantidad" className="block text-lg font-medium text-gray-700">
            Cantidad de personas:
          </label>
          <input
            type="number"
            name="cantidad"
            value={formData.cantidad}
            onChange={handleChange}
            min="1"
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Fecha de inicio */}
        <div>
          <label htmlFor="fechaInicio" className="block text-lg font-medium text-gray-700">
            Fecha de inicio:
          </label>
          <input
            type="date"
            name="fechaInicio"
            value={formData.fechaInicio}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Fecha de fin */}
        <div>
          <label htmlFor="fechaFin" className="block text-lg font-medium text-gray-700">
            Fecha de fin:
          </label>
          <input
            type="date"
            name="fechaFin"
            value={formData.fechaFin}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-lg font-medium text-gray-700">
            Nombre:
          </label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        {/* Teléfono */}
        <div>
          <label htmlFor="telefono" className="block text-lg font-medium text-gray-700">
            Teléfono:
          </label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>


        {/* Botón de envío */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-rojo text-white py-2 px-4 rounded-lg font-bold hover:bg-red-600 transition duration-300"
          >
            Enviar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
