import { create } from "zustand";

export const useCardStore = create((set) => ({
  productoSeleccionado: null,
  mostrarDetalles: false,
  setProductoSeleccionado: (producto) =>
    set({ productoSeleccionado: producto }),
  setMostrarDetalles: (mostrar) => set({ mostrarDetalles: mostrar }),
}));

export const useStockStore = create((set) => ({
  stockActual: 0,
  setStockActual: (nuevoStock) => set({ stockActual: nuevoStock })
}))
