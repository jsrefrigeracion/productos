import { useEffect, useState } from "react";
import { API_URL } from "../js/variables";
import { hexToUrl } from "../js/functions";
import arrowBack from "../assets/arrow-back.svg";
export const CardDetails = ({ producto, onClose }) => {
  const [imagen, setImagen] = useState(null);
  useEffect(() => {
    const obtenerImagen = async () => {
      try {
        const response = await fetch(
          `${API_URL}/api/productosImagen?idArticulo=${producto.Codigo}`
        );
        const data = await response.json();
        setImagen(data.data[0]);
        console.log(data.data[0]);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    };
    obtenerImagen();
  }, [producto]);

  if (imagen === null) {
    return (
      <div className="card">
        <p>No se encontraron productos</p>
      </div>
    );
  }

  return (
    <>
      <div className="card-details-container">
        <header>
          <button onClick={onClose}>
            <img src={arrowBack} alt="" width={20} height={20} />
          </button>
          <h2>Detalles del producto</h2>
        </header>
        <main className="card-details-main">
          <img
            src={hexToUrl(imagen.Imagen.data)}
            alt=""
            width={100}
            className="card-image"
          />
          <div className="card-detail-info">
            <h1>{producto.Nombre}</h1>
            <div className="card-details-main-code-stock">
              <p>Código: {producto.Codigo}</p>
              <p>|</p>
              <p>Stock: {producto.StockActual}</p>
            </div>
          </div>
          <div className="card-details-main-prices">
            <h3>Precios</h3>
            <p>Precio Público: ${producto.PrecioPublico}</p>
            <p>Precio Técnicos: ${producto.PrecioTecnico}</p>
            <p>Precio Mayorista: ${producto.PrecioMayorista}</p>
          </div>
        </main>
      </div>
    </>
  );
};
