import React from 'react';
import './home.css';
import Pelicula from '../../components/Pelicula/Pelicula';

function Home (){
    return(
        <React.Fragment>
            <section class="home">
                <Pelicula/>
                </section>
        </React.Fragment>
    )
}



export default Home;