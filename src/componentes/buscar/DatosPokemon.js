import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import missingNo from '../../img/missingno.png'

function DatosPokemon({ nombre }) {
  const [nombrePokemon, setNombreUrl] = useState(null);
  const [tipoPokemon, setTipoUrl] = useState(null);
  const [numeroPokemon, setNumeroUrl] = useState(null);
  const [habilidad, setHabilidad] = useState(null);
  const [peso, setPeso] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const Url = "https://pokeapi.co/api/v2/pokemon/" + nombre;


  useEffect(() => {
    fetch(Url)
      .then((response) => {
        if (!response.ok) {
          setNombreUrl("???");
          setTipoUrl("???");
          setNumeroUrl("???");
          setHabilidad("???");
          setPeso("???");
          setImageUrl(missingNo); //MissingNo icon          
        }

        return response.json();
      })
      .then((data) => {
        setNombreUrl(data.name); //NOMBRE
        setTipoUrl(data.types[0].type.name); // TIPO
        setNumeroUrl(data.id); //ID
        setHabilidad(data.abilities[0].ability.name) //HABILIDADES
        setPeso(data.weight) //Peso
        setImageUrl("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+data.id+".png")
      })
      .catch(() => console.log());
  });

  return (
    <div>
      <Box className="BoxImagenPokemon">
        <img class="sprite-pokemon" src={imageUrl} alt="pokemon sprite"/>
      </Box>
      
      <Box className="BoxDatosPokemon">    
        <p>
          #{numeroPokemon} <br/>
          {nombrePokemon} <br />
          {tipoPokemon} type<br/>
          weight: {peso} Lb <br/>
          Ability: {habilidad} <br/>
        </p>
      </Box>
    </div>
  );
}
export default DatosPokemon;
