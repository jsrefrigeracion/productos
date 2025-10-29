export const Header = ({ onBuscar }) => {
  return (
    <>
      <header>
        <h1>JS Refrigeraciones</h1>
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
