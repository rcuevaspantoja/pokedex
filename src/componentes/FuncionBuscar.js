/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import VentanaModal from './Ventanamodal.js'

function FuncionBuscar({nombre}) {

    const [imageUrl, setImageUrl] = useState(null);
    const [abrirModal, setAbrirModal] = useState(true);
    const funcionAbrirModal = () => setAbrirModal(true);
    const funcionCerrarModal = () => setAbrirModal(false);

    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    useEffect(() => {/*Cada vez que algo se actualice en el DOM se ejecutará esta función. */

        fetch( Url )
        .then((response) =>{ 

                              if( !response.ok ){
                                
                                setImageUrl("https://static.wikia.nocookie.net/bec6f033-936d-48c5-9c1e-7fb7207e28af"); //MissingNo  icon
                                {funcionAbrirModal()}
                                <VentanaModal/>//ejecuta la porción de código de modal      
                              }

          return response.json();
        }).then( data => {
          setImageUrl(data.sprites.front_default)
        } )
      .catch(() => console.log("Problemas al comunicarse con el servidor para obtener Pkm_img."))
    });


  return (
    <div className='pantalla-1'>
        <img src={imageUrl} height="200" alt="Imagen del Pokémon seleccionado."/>   
    </div>
  )
}

export default FuncionBuscar