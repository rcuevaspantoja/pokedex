import React from 'react'
import Buscador from './buscador'
import FuncionBuscar from './FuncionBuscar';
import DatosPokemon from './DatosPokemon';

function Base() {

  const nombrePokemon = "mudkip"

  return (
    <div className='base'>
        <Buscador />

        <FuncionBuscar nombre = {nombrePokemon} />
        <DatosPokemon nombre = {nombrePokemon} />

    </div>
  )
}
export default Base