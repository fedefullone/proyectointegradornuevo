import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './peliculacard.css'



class PeliculaCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classDescipcion: 'hidden',
            textDescripcion: 'Ver Mas'
        }
    }

    verMas () {
        if(this.state.classDescipcion === 'hidden'){
            this.setState({classDescipcion: 'show', textDescripcion: 'Ver Menos'})
        } else {
            this.setState({classDescipcion: 'hidden', textDescripcion: 'Ver Mas'})
        }
    }

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <Link to={`/detalle/id/${this.props.unaPelicula.id}`}> {/* ruta detalle */}
                    <img alt='foto' src={`https://image.tmdb.org/t/p/w342/${this.props.unaPelicula.poster_path}`}   />
                </Link>
                
                <h1> {this.props.unaPelicula.title} </h1>

                <p onClick={() => this.verMas()}> {this.state.textDescripcion} </p>
                <p className={this.state.classDescipcion}>  {this.props.unaPelicula.overview}   </p>
                <p> Agregar a favoritos </p>

            </React.Fragment>
        )
    }
}

export default PeliculaCard;