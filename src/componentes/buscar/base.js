import {React, useState} from 'react'
 import Buscador from './buscador'
import FuncionBuscar from './FuncionBuscar';
import DatosPokemon from './DatosPokemon';

function Base() {

  const [nombrePokemon, setNombrePokemon] = useState('pikachu')

  const cambioNombre =(nombre) =>{
    setNombrePokemon(nombre);
  }

  return (
    <div className='base'>
        <Buscador nombrePokemon = {nombrePokemon} cambioNombre= {cambioNombre} />   
        <FuncionBuscar nombre = {nombrePokemon} />
        <DatosPokemon nombre = {nombrePokemon} />
    </div>
  )
}
export default Base