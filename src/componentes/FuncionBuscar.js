/* eslint-disable */
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'

function FuncionBuscar({nombre}) {
    //CONSTANTES
    const [imageUrl, setImageUrl] = useState(null);
    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre


    useEffect(() => {/*Cada vez que algos e actualice en URL (line 26) se ejecutará */

        fetch( Url )
        .then((response) =>{ 

          if( !response.ok ){  //entra cuando no sea exitosa la consulta
            console.log("Ejecución de la función")
            setImageUrl("https://static.wikia.nocookie.net/bec6f033-936d-48c5-9c1e-7fb7207e28af"); //MissingNo icon
          }

          return response.json();
        }).then( data => {
          setImageUrl(data.sprites.front_default)
        } )
      .catch(() => console.log("Error al buscar la imagen del Pokémon"))
    }) 

  return (
      <div className='pantalla-1'>
        <img src={imageUrl} height="200" alt="Imagen del Pokémon seleccionado."/>   
      </div>
  )
}

export default FuncionBuscar