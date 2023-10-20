import { ListItem } from '@mui/material'
import React, {useState, useEffect } from 'react'
import 'react-infinite-scroll-component'
import InfiniteScroll from 'react-infinite-scroll-component'

function Listado() {

const[pokemon, setPokemon] = useState([])
const[infoid, setInfoId] =  useState([])
var contadorDeIdpokemon = 0;

/*Obtiene la lista de pokémons => {nombre, url al perfil del pokemon} */
const ObtenerLista = (id, url) => {
    let uri =
        id === null
            ? url
            : `https://pokeapi.co/api/v2/pokemon/`;
    fetch(uri)
        .then((response) => response.json())
        .then((data) => {
            let newData = pokemon.concat(data.results)
            setPokemon(newData)
            setInfoId(data.next)
        })  
}

useEffect(() => {
    ObtenerLista(1, null);
}, [])

return (
    <div className='infinite-scroll-container' id='infiniteScroll'>
        {infoid !== null ? (
            <InfiniteScroll
            dataLength={pokemon.length} //CADA CUANTOS SE ACTUALIZA
            next={() => {
                ObtenerLista(null, infoid)
            }}
            hasMore={true}
            loader={<h4>Cargando Pokémon...</h4>}
            scrollableTarget="infiniteScroll"
            endMessage={
                <p style={{ textAlign: 'center' }}>
                <b>No hay más Pokémons de momento para cargar.</b>
                </p>
            }
            >

                <div class="container-fluid">
                    <div class="row">
                        {pokemon.map((e) =>{
                                contadorDeIdpokemon +=  1
                                let imgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+contadorDeIdpokemon+".png"
                                console.log(imgURL)
                                return(
                                    <div class="card text-center">
                                        <img class="sprite-pokemon" src={imgURL} alt="Card image cap"/>
                                        <div class="card-body">
                                            <h5 class="card-title">#{contadorDeIdpokemon} {e.name}</h5>
                                        </div>
                                    </div>
                                )
                            })}                       
                    </div>
                </div>



            </InfiniteScroll>
        ) : (
            ""
        )}
    </div>
    )
}

export default Listado