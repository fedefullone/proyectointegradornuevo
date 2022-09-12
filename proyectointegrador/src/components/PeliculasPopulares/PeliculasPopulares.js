import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import Pelicula from '../Pelicula/Pelicula'
import { Link } from 'react-router-dom';


let urlPeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1"


class PeliculasPopulares extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: []

        }
    }

    componentDidMount() {
        //Traigo los datos de las peliculas mas populares
        fetch(urlPeliculasPopulares)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculasPopulares: data.results,
                })
            }
            )
    }

    render() {


        return (
            <React.Fragment>
                <section className="sectionHome">
                    <h1 className="titulosHome">Películas populares</h1>

                    {this.state.peliculasPopulares === [] ? <h3>Cargando</h3> :
                        this.state.peliculasPopulares.map((unaPelicula, idx) => <PeliculaCard key={idx} unaPelicula={unaPelicula} />)
                    }



                </section>



            </React.Fragment>
        )
    }
}

export default PeliculasPopulares;

//cargar mas info, formulario para filtrar




