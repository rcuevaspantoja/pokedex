import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand text-light" as={Link} to={"/"} >Pokedex
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" as={Link} to={"/listado"} >Listado</Link>

                <Link class="nav-item nav-link" as={Link} to={"/buscar"} >Buscar</Link>
              </div>
          </div>
      </nav>    
  )

}

export default navbar