import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function DatosPokemon({nombre}) {

    const[nombrePokemon, setNombreUrl] = useState(null);
    const[tipoPokemon, setTipoUrl] = useState(null);
    const[numeroPokemon, setNumeroUrl] = useState(null);

    const Url = 'https://pokeapi.co/api/v2/pokemon/' + nombre
    const urlLocation = "https://pokeapi.co/api/v2/location/" + "25"

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
        
        fetch(urlLocation)
        .then((responseLocation) =>{
          //console.log(responseLocation.region)
          console.log("URL: "+ urlLocation)
          console.log(responseLocation)
        
        })

        })

  return (
    <Box className='DatosPokemon' sx={{ m:0 }}>
      <h1>#{numeroPokemon}</h1>
      <h1>{nombrePokemon}</h1>
      <h1>{tipoPokemon} type</h1>
      <h1 className='location'>LOCATION</h1>
      <h1>Route 104</h1>
    </Box>
  )
}
export default DatosPokemon