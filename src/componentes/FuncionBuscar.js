/* eslint-disable */
import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function FuncionBuscar({nombre}) {

    const [imageUrl, setImageUrl] = useState(null);
    const [nombreUrl, setNombreUrl] = useState(null);
    
    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    useEffect(() => {
        
        fetch( Url )
        .then(response => response.json())
        .then( data => {
            setImageUrl(data.sprites.front_default)
            setNombreUrl(data.forms[0].name)
            console.log(data)
        } )
        .catch(() => console.log("Problemas al comunicarse con el servidor."))

    }, []);


  return (
    <div className='imagenPKM'>
        <img src={imageUrl}  height="400" alt="Imagen del Pokémon seleccionado."/>   
    </div>
    
  )
}

export default FuncionBuscar