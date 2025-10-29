import "./css/App.css";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import { API_URL } from "./js/variables";
import { useCardStore } from "./store/useCard";

function App() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const { mostrarDetalles } = useCardStore();
  // ✅ Cargar productos desde el JSON al iniciar
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/productosCodigo`);
        const productosObtenidos = await response.json();

        // guardamos los datos originales y los filtrados
        setProductos(productosObtenidos.data);
        setProductosFiltrados(productosObtenidos.data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    obtenerProductos();
  }, []);

  // ✅ Filtrar mientras se escribe
  const filtrarProductos = (texto) => {
    if (texto.length === 0) {
      console.log("no hay texto");
      return setProductosFiltrados(productos);
    }

    // Si el texto es numérico, buscar por código
    // Si tiene letras, buscar por nombre
    const esNumero = /^\d+$/.test(texto);
    const copiaProductos = productos;

    const resultado = copiaProductos.filter((p) =>
      esNumero
        ? p.Codigo.toString() === texto
        : p.Nombre.toLowerCase().includes(texto.toLowerCase())
    );

    setProductosFiltrados(resultado);
  };

  return (
    <>
      {!mostrarDetalles && <Header onBuscar={filtrarProductos} />}
      <Card productos={productosFiltrados} />
      <Footer />
    </>
  );
}

export default App;
