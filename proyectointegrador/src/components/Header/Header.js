import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <nav>
            <ul className="main-nav">
                <Link to="/">
                    <img src='/img/logo.png' alt='logo'/>
                </Link>
                
                <Link to="/">Home</Link>
                <Link to="/populares">Películas Populares</Link>
                <Link to="/cartelera">Películas Cartelera</Link>
                <Link to="/favoritos">Favoritas</Link>
                
            </ul>
        </nav>
    )
}

export default Header
