import React from 'react';
import './home.css';
import Pelicula from '../../components/Pelicula/Pelicula';

function Home (){
    return(
        <React.Fragment>
            <h1  className="titulosHome">Películas en cartelera</h1>
                <Movie/>
        </React.Fragment>
    )
}



export default Home;