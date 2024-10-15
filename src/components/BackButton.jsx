import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // -1 indica que retrocede a la página anterior
  };

  return (
    <button
      onClick={goBack}
      className="bg-rojo text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
    >
      ← Volver
    </button>
  );
}

export default BackButton;
