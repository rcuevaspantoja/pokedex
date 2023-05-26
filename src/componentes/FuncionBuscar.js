/* eslint-disable */
import React, { useEffect, useState } from 'react'

function FuncionBuscar({nombre}) {

    const [imageUrl, setImageUrl] = useState(null);
    
    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    useEffect(() => {
        
        fetch( Url )
        .then(response => response.json())
        .then( data => {
            setImageUrl(data.sprites.front_default)
        } )
        .catch(() => console.log("Problemas al comunicarse con el servidor para obtener Pkm_img."))

    }, []);


  return (
    <div className='pantalla-1'>
        <img src={imageUrl}  height="200" alt="Imagen del Pokémon seleccionado."/>   
    </div>
  )
}

export default FuncionBuscar