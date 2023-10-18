import React from 'react'
import { Link, Router, Route, Routes, NavLink } from 'react-router-dom'

function navbar() {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand text-danger" as={Link} to={"/"} >Pokedex
          </Link>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-item nav-link" as={Link} to={"/listado"} >Listado</Link>

                <Link class="nav-item nav-link" as={Link} to={"/buscar"} >Buscar</Link>
              </div>
          </div>
      </nav>    
    </div>
  )
}

export default navbar