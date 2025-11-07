export const Header = ({ onBuscar }) => {
  return (
    <>
      <header>
        <h1>JS Refrigeracion</h1>
        <input
          type="text"
          name="barraBusqueda"
          id="barraBusqueda"
          placeholder="Buscar productos"
          onChange={(e) => onBuscar(e.target.value)}
        />
      </header>
    </>
  );
};
