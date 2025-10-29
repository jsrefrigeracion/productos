import arrow from "../assets/arrow.svg";
import { CardDetails } from "./CardDetails";
import { useCardStore } from "../store/useCard";

export const Card = ({ productos }) => {
  const {
    productoSeleccionado,
    mostrarDetalles,
    setProductoSeleccionado,
    setMostrarDetalles,
  } = useCardStore();

  if (!productos.length) {
    return (
      <div className="card">
        <p>No se encontraron productos</p>
      </div>
    );
  }

  const handleProductClick = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarDetalles(true);
  };
  const handleCloseDetails = () => {
    setMostrarDetalles(false);
    setProductoSeleccionado(null);
  };

  return (
    <>
      {!mostrarDetalles && (
        <div className="card">
          {productos.map((producto) => (
            <div
              key={producto.Codigo}
              className="card-container"
              onClick={() => handleProductClick(producto)}
            >
              <div className="card-info">
                <h2 className="card-title">{producto.Nombre}</h2>
                <p className="card-code-stock">
                  Código: {producto.Codigo} | Stock: {producto.StockActual}
                </p>
              </div>
              <img
                src={arrow}
                alt=""
                className="card-arrow"
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      )}
      {mostrarDetalles && (
        <CardDetails
          producto={productoSeleccionado}
          onClose={handleCloseDetails}
        />
      )}
    </>
  );
};
