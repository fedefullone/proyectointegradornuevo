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
                <article className='pelicula-Card'>

                
                    <Link to={`/detalle/id/${this.props.unaPelicula.id}`}> {/* ruta detalle */}
                        <img alt='foto' src={`https://image.tmdb.org/t/p/w342/${this.props.unaPelicula.poster_path}`}   />
                    </Link>
                    
                    <h1 className="titulo-pelicula"> {this.props.unaPelicula.title} </h1>
                    <div className='desc-text'>
                        <p onClick={() => this.verMas()} className='descripcion'> {this.state.textDescripcion} </p>
                        <p className={this.state.classDescipcion + ' ' + 'descripcion'}>  {this.props.unaPelicula.overview}   </p>
                        
                    </div>
                    
                    <p className='addFav'> Agregar a favoritos </p>
                </article>
            </React.Fragment>
        )
    }
}

export default PeliculaCard;