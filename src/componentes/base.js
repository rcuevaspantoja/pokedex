import React from 'react'
import Buscador from './buscador'
import FuncionBuscar from './FuncionBuscar';

function Base() {

  return (
    <div className='base'>

      <div className='contenedor-buscadoryPantalla-1'>

        <Buscador />

        <div className='pantalla-1'>
          <FuncionBuscar nombre = {"ditto"} />
        </div>
      </div>
      
      <div className='pantalla-2'></div>
    </div>
  )
}

export default Base