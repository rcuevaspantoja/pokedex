import React, { useEffect, useState } from 'react'

/* https://www.escuelafrontend.com/data-fetching-con-react */

function Foto() {

    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then( data => {
            setImageUrl(data.sprites.front_default)
        } )
        .catch(() => console.log("Problemas al comunicarse con el servidor."))

      }, []);

    return (
        <div className='imagenPKM'>
            <img src={imageUrl}  height="300" alt="Imagen del Pokémon seleccionado."/>
        </div>
    )
}

export default Foto