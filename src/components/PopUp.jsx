import { API_URL } from "../js/variables";
import axios from "axios";
export const PopUp = ({ value, idArticulo, handleCancelar }) => {
  const handleCerrar = () => {
    handleCancelar();
  };

  const handleConfirmar = async (idArticulo, stock) => {
    try {
      const response = await axios.post(`${API_URL}/api/actualizar-stock`, {
        idArticulo,
        stock,
      });

      console.log("Respuesta del servidor:", response.data);
      alert("Stock actualizado correctamente");
      handleCerrar();
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo actualizar el stock");
    }
  };

  return (
    <>
      <div className="pop-up-container-background">
        <div className="pop-up-container">
          <h1>Confirmación</h1>
          <p>¿Estás seguro que deseas cambiar el stock?</p>
          <div>
            <button onClick={() => handleConfirmar(idArticulo, value)}>
              Confirmar
            </button>

            <button onClick={handleCerrar}>Cancelar</button>
          </div>
        </div>
      </div>
    </>
  );
};
