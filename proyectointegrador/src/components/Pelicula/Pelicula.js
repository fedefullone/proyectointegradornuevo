import React, { Component } from 'react';

let urlPeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
let urlPeliculasCartelera = "https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1";


class Peliculas extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares: [],
            peliculasCartelera: []
        }
    }

    componentDidMount(){
    //Buscamos los datos de las peliculas mas populares
    fetch(urlPeliculasPopulares)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasPopulares: data.results,
            }))
            .catch()
    //Buscamos los datos de las peliculas Top
    fetch(urlPeliculasCartelera)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasCartelera: data.results,
            }))
            .catch()
        }


    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default Peliculas;