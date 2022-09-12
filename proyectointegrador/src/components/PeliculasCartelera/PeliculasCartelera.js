import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import Pelicula from '../Pelicula/Pelicula'
import { Link } from 'react-router-dom';

let urlPeliculasCartelera = "https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1";


class PeliculasCartelera extends Component {
    constructor() {
        super()
        this.state = {
            peliculasCartelera: []

        }
    }

    componentDidMount() {
        //Traigo los datos de las peliculas mas populares
        fetch(urlPeliculasCartelera)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculasCartelera: data.results,
                })
            }
            )
    }

    
    render(){
        
           
        return(
            <React.Fragment>
                <section className="sectionHome">
               
                <h1  className="titulosHome">Películas en cartelera</h1>

                    {this.state.peliculasCartelera === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasCartelera.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }
                
</section>



            </React.Fragment>
        )
    }
}

export default PeliculasCartelera;