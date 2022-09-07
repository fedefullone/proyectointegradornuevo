import React from 'react';
import './home.css';
import Peliculas from '../../components/Pelicula/Pelicula';

function Home (){
    return(
        <React.Fragment>
            <h1  className="titulosHome">Películas en cartelera</h1>
                <Peliculas/>
        </React.Fragment>
    )
}



export default Home;