import {React, useState} from 'react'
import Buscador from './buscador'
import FuncionBuscar from './FuncionBuscar';
import DatosPokemon from './DatosPokemon';

function Base() {

  const [nombrePokemon, setNombrePokemon] = useState('mudkip')

  return (
    <div className='base'>
        <Buscador nombrePokemon = {nombrePokemon} />

        <FuncionBuscar nombre = {nombrePokemon} />
        <DatosPokemon nombre = {nombrePokemon} />

    </div>
  )
}
export default Base