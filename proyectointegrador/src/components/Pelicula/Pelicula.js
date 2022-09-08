import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import { Link } from 'react-router-dom';
import './/pelicula.css';



let urlPeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1"
let urlPeliculasCartelera = "https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1";


class Pelicula extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
            peliculasCartelera: []
        }
    }

    componentDidMount(){
    //Traigo los datos de las peliculas mas populares
    fetch(urlPeliculasPopulares)
            .then( res => res.json())
            .then( data => {
                console.log(data);
                this.setState({
                peliculasPopulares: data.results,
            })}
            )
        
    //Traigo los datos de las peliculas en cartelera
    fetch(urlPeliculasCartelera)
            .then( res => res.json())
            .then( data => {
                console.log(data);
                this.setState({
                peliculasCartelera: data.results,
            })}
            )
    }


    render(){
        
           
        return(
            <React.Fragment>
                <section className="sectionHome">
                <h1  className="titulosHome">Películas populares</h1>

                    {this.state.peliculasPopulares === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasPopulares.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }
                <h2><Link to='/populares'> Ver todas las peliculas populares</Link></h2>
                <h1  className="titulosHome">Películas en cartelera</h1>

                    {this.state.peliculasCartelera === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasCartelera.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }
                <h2><Link to='/cartelera'> Ver todas las peliculas cartelera</Link></h2>
</section>



            </React.Fragment>
        )
    }
}

export default Pelicula;