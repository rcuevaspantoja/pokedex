import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';


function DatosPokemon({nombre}) {

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
    <div>

      <p>#{numeroPokemon}</p>
      <p>{nombrePokemon}</p>
      <p>Pokémon tipo {tipoPokemon}</p>

    </div>
  )
}

export default DatosPokemon