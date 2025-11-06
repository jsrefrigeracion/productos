import { useState } from "react";
import { PopUp } from "./PopUp";

export const EditStock = ({ idArticulo, actualizarStock }) => {
  const [mostrarInput, setMostrarInput] = useState(false);
  const [stock, setStock] = useState(0);
  const [mostrarPopUp, setMostrarPopUp] = useState(false);
  const [valueInput, setValueInput] = useState(0);

  const handleCancelar = () => {
    setMostrarPopUp(false);
    setMostrarInput(false);
  };

  const handleMostrarInput = () => {
    setMostrarInput(!mostrarInput);
  };
  const handleChangeStock = () => {
    setStock(valueInput);
    setMostrarPopUp(true);
  };

  return (
    <>
      <div className="edit-stock-container">
        <button onClick={handleMostrarInput}>Editar Stock</button>
        {mostrarInput && (
          <input
            type="number"
            name="stock"
            id="stock"
            onChange={(e) => setValueInput(e.target.value)}
          />
        )}
        {mostrarInput && <button onClick={handleChangeStock}>Guardar</button>}
        {mostrarPopUp && (
          <PopUp
            value={stock}
            idArticulo={idArticulo}
            handleCancelar={handleCancelar}
            actualizarStock={actualizarStock}
          />
        )}
      </div>
    </>
  );
};
