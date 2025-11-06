import { API_URL } from "../js/variables";
import axios from "axios";
export const PopUp = ({
  value,
  idArticulo,
  handleCancelar,
  actualizarStock,
}) => {
  const handleCerrar = () => {
    handleCancelar();
  };

  const handleConfirmar = async (idArticulo, stock) => {
    try {
      const response = await axios.post(`${API_URL}/api/actualizar-stock`, {
        idArticulo,
        stock,
      });

      alert("Stock actualizado correctamente");
      handleCerrar();
      actualizarStock(stock);
      return response.data;
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
