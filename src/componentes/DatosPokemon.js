import React, { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

function DatosPokemon({nombre}) {

    const theme = createTheme({
      typography: {
      h6: {
          color: 'black',
          lineHeight: 1.2
        }
      }
    });

    const[nombrePokemon, setNombreUrl] = useState(null);
    const[tipoPokemon, setTipoUrl] = useState(null);
    const[numeroPokemon, setNumeroUrl] = useState(null);

    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    useEffect(() => {
          
        fetch( Url )
        .then((response) =>{

          if( !response.ok ){
            setNombreUrl("???");
            setTipoUrl("???");
            setNumeroUrl("???");
          }
          
          return response.json();
        }).then( data => {
            setNombreUrl(data.name);
            setTipoUrl(data.types[0].type.name);
            setNumeroUrl(data.id);
        })
        .catch(() => console.log("Error al buscar nombre del Pokémon"))


        })

  return (
    <Box className='DatosPokemon' sx={{ m:0 }}>
    <Typography variant='h6' theme={theme}>#{numeroPokemon}</Typography>
      <Typography variant='h6' theme={theme} sx={{ textTransform: 'uppercase' }}>{nombrePokemon}</Typography>
      <Typography variant='h6' theme={theme}>{tipoPokemon} type</Typography>
    </Box>
  )
}
export default DatosPokemon