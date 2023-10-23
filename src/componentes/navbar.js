import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {

  return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand text-light" >Pokedex
          </Link>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" as={Link} to={"/listado"} >Listado</Link>

                <Link class="nav-item nav-link" as={Link} to={"/buscar"} >Buscar</Link>
              </div>
          </div>
      </nav>    
  )
}

export default navbar