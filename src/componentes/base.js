import React from 'react'
import Buscador from './buscador'

function base() {
  return (
    <div className='base'>
      <div className='contenedor-buscadoryPantalla-1'>
        <Buscador/>
        <div className='pantalla-1'></div>
      </div>

      <div className='pantalla-2'></div>
    </div>
  )
}

export default base