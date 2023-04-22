import React from 'react'
import Buscador from './buscador'
import FuncionBuscar from './FuncionBuscar';
import DatosPokemon from './DatosPokemon';

function Base() {

  const nombrePokemon = "pikachu"

  return (
    <div className='base'>

      <div className='contenedor-buscadoryPantalla-1'>

        <Buscador />

        <div className='pantalla-1'>
          <FuncionBuscar nombre = {nombrePokemon} />
        </div>

        <div className='pantalla-1-inferior'>
          <DatosPokemon nombre = {nombrePokemon} />
        </div>

      </div>
      
      <div className='pantalla-2'></div>
    </div>
  )
}

export default Base