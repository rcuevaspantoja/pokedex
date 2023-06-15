/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { Modal, Typography } from '@mui/material';

function FuncionBuscar({nombre}) {

    const [imageUrl, setImageUrl] = useState(null);

    //manipulación del modal
    const [abrirModal, setAbrirModal] = useState(false);
    const funcionAbrirModal = () => setAbrirModal(true);
    const funcionCerrarModal = () => setAbrirModal(false);

    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    /*Cada vez que algo se actualice en el DOM se ejecutará esta función. */
    useEffect(() => {

        fetch( Url )
        .then((response) =>{ 

          if( !response.ok ){

            {funcionAbrirModal()}
            <Modal
              open={abrirModal}
              onClose={funcionCerrarModal}
            >
              <Box>
                <Typography> modal </Typography>
              </Box>
            </Modal>

          }
          return response.json();
        }).then( data => {
          setImageUrl(data.sprites.front_default)
        } )
      .catch(() => console.log("Problemas al comunicarse con el servidor para obtener Pkm_img."))
    });


  return (
    <div className='pantalla-1'>
        <img src={imageUrl}  height="200" alt="Imagen del Pokémon seleccionado."/>   
    </div>
  )
}

export default FuncionBuscar