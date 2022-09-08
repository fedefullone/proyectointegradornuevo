import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import Pelicula from '../Pelicula/Pelicula'
import { Link } from 'react-router-dom';


let urlPeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1"
let urlPeliculasCartelera = "https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1";


class TodasPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: ''
        }
    }

    componentDidMount(){
    //Traigo los datos de las peliculas
    fetch(this.props.pagina ? urlPeliculasPopulares : urlPeliculasCartelera)
            .then( res => res.json())
            .then( data => {
                console.log(data);
                this.setState({
                datos: data.results,
            })}
            )
    }


    render(){
        
           
        return(
            <React.Fragment>
                <h1  className="titulosHome">{this.props.pagina ? 'Peliculas populares' : 'Peliculas en cartelera'}</h1>

                    {this.state.peliculasPopulares === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasPopulares.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }

                 {this.state.peliculasCartelera === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasCartelera.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }



            </React.Fragment>
        )
    }
}

export default TodasPeliculas;