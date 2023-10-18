import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

function DatosPokemon({ nombre }) {
  const [nombrePokemon, setNombreUrl] = useState(null);
  const [tipoPokemon, setTipoUrl] = useState(null);
  const [numeroPokemon, setNumeroUrl] = useState(null);
  const [habilidades, setHabilidades] = useState(null);
  const [peso, setPeso] = useState(null);

  const Url = "https://pokeapi.co/api/v2/pokemon/" + nombre;


  useEffect(() => {
    fetch(Url)
      .then((response) => {
        if (!response.ok) {
          setNombreUrl("???");
          setTipoUrl("???");
          setNumeroUrl("???");
          setHabilidades("???");
          setPeso("???");
        }

        return response.json();
      })
      .then((data) => {
        setNombreUrl(data.name); //NOMBRE
        setTipoUrl(data.types[0].type.name); // TIPO
        setNumeroUrl(data.id); //ID
        setHabilidades(data.abilities[0].ability.name) //HABILIDADES
        setPeso(data.weight) //Peso
      })
      .catch(() => console.log());
  });

  return (
    <Box className="DatosPokemon" sx={{ m: 0 }}>
      <h1>#{numeroPokemon}</h1>
      <h1>{nombrePokemon}</h1>
      <h1>{tipoPokemon} type</h1>
      <h1>{peso} LB</h1>
      <h1 className="habilidades">Main Ability</h1>
      <h1>{habilidades}</h1>
    </Box>
  );
}
export default DatosPokemon;
