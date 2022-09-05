import React from 'react'

function Header() {
    return (
        <header>
        <div class="logoHome">
          <a href="index.html"
            ><img class="logo" src="./img/logo-home.png" alt="Logo"
          /></a>
        </div>
    
        <div id="segundoDiv">
          <nav class="navegadorHeader">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="favorites.html">Favoritos</a>
              </li>
              <li>
                <a href="genres.html">Generos</a>
              </li>
            </ul>
          </nav>
    
          <form method="GET" class="buscadorHeader" action="./search-results.html">
            <input id="buscadorHeaderInput" type="search" name="formularioDeBusqueda" placeholder="Buscar algo" />
        </form>
        </div>
      </header>
    )
}

export default Header
