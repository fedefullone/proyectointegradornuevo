import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './peliculacard.css'



class PeliculaCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classDescipcion: 'hidden',
            textDescripcion: 'Ver Mas',
            favsMessage: 'Agregar a favoritos'
        }
    }

    verMas () {
        if(this.state.classDescipcion === 'hidden'){
            this.setState({classDescipcion: 'show', textDescripcion: 'Ver Menos'})
        } else {
            this.setState({classDescipcion: 'hidden', textDescripcion: 'Ver Mas'})
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage!== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.unaPelicula.id)){
            this.setState({
                favsMessage: 'Quitar de favoritos'
            })
        }
    }

    agregarYQuitarDeFavoritos(id){
        //Tiene que agregra un id dentro de un array y guardarlo en localStorage
        //Chequear si el id ya existe, ofrecer al usuario la posibilidad de sacarlo.
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage!== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }
        //Preguntemos si el id ya esta en el array.
        if(favoritos.includes(id)){ //includes retorna un booleano.
        favoritos = favoritos.filter(unId => unId !== id);
        //mostrar al usuario un nuevo texto que diga "agregar a favs"
        this.setState({
            favsMessage:'Agregar de favoritos '})
        } else{
            favoritos.push(id);
            //mostrar un texto que diga "quitar de favs"
            this.setState({
                favsMessage:'Quitar de favoritos '
            })
        }
        
        let favoritoToString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favoritoToString)

        console.log(localStorage)
    }

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <article className='pelicula-Card'>

                
                    <Link to={`/detalle/id/${this.props.unaPelicula.id}`}> {/* ruta detalle */}
                        <img className='foto' alt='foto' src={`https://image.tmdb.org/t/p/w342/${this.props.unaPelicula.poster_path}`}   />
                    </Link>
                    
                    <h1 className="titulo-pelicula"> {this.props.unaPelicula.title} </h1>
                    <div className='desc-text'>
                        <p onClick={() => this.verMas()} className='descripcion'> {this.state.textDescripcion} </p>
                        <p className={this.state.classDescipcion + ' ' + 'descripcion'}>  {this.props.unaPelicula.overview}   </p>
                        
                    </div>
                    
                    <p className='addFav'onClick={()=>this.agregarYQuitarDeFavoritos(this.props.unaPelicula.id)}> {this.state.favsMessage} </p>
                </article>
            </React.Fragment>
        )
    }
}

export default PeliculaCard;