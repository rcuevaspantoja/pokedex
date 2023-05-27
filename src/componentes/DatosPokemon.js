import React, { useEffect, useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

function DatosPokemon({nombre}) {

    const theme = createTheme({
      typography: {
        h6: {
          color: 'white'
        }
      }
    });

    const[nombrePokemon, setNombreUrl] = useState(null);
    const[tipoPokemon, setTipoUrl] = useState(null);
    const[numeroPokemon, setNumeroUrl] = useState(null);

    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre

    useEffect(() => {

        fetch ( Url )
        .then(response => response.json())
        .then( data => {
/*             console.log(data.id)
            console.log(data.name)
            console.log(data.types[0].type.name) */
            setNombreUrl(data.name);
            setTipoUrl(data.types[0].type.name);
            setNumeroUrl(data.id);
        })
    })

  return (
    <div className='DatosPokemon'>
      <Typography variant='h6' theme={theme}>#{numeroPokemon}</Typography>
      <Typography variant='h6' theme={theme}>{nombrePokemon}</Typography>
      <Typography variant='h6' theme={theme}>{tipoPokemon} type</Typography>
    </div>
  )
}

export default DatosPokemon