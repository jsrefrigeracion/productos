import { useState } from "react"

export const EditStock = () => {

    const [mostrarInput, setMostrarInput] = useState(false)

    const handleMostrarInput = () => {
        setMostrarInput(!mostrarInput)
    }
    const handleChangeStock = (e) => {   
            stockActual = e.target.value
            setMostrarInput(false)
    }

  return (
    <>
        <div>
            <button onClick={handleMostrarInput}>Editar Stock</button>
            {mostrarInput && <input type="number" name="stock" id="stock"/>}
            {mostrarInput && <button onClick={handleChangeStock}>Guardar</button>}            
        </div>
    </>
  )
}
