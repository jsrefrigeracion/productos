import { create } from "zustand";

export const useCardStore = create((set) => ({
  productoSeleccionado: null,
  mostrarDetalles: false,
  setProductoSeleccionado: (producto) =>
    set({ productoSeleccionado: producto }),
  setMostrarDetalles: (mostrar) => set({ mostrarDetalles: mostrar }),
}));
