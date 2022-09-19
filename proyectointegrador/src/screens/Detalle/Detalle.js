import React, {Component} from 'react';
import "./detalle.css" 

class Detalle extends Component{  
    constructor(props){
        super(props);
        this.state = {
            peliculas: '',
            favsMessage: 'Agregar a favoritos'

        }
    }

    componentDidMount () {
        const id = this.props.match.params.id;
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d7005b857875520a55d00ac604b383c7`)
        .then(response=>response.json())
        .then(data=> {
            this.setState({peliculas: data})
        })
        .catch(error=>console.log('El error fue: ' + error))
        
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage!== null){
            let favoritosToArray = JSON.parse(recuperoStorage);
            favoritos = favoritosToArray
        }
        if(favoritos.includes(this.props.match.params.id)){
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
    

    render () {
        return (
           
            <React.Fragment>
                {
                    this.state.peliculas === ""?
                    <h4>Cargando</h4>:
                    <article className='articlemovies'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.peliculas.poster_path}`} alt=""/>
                        <div>
                            <h2 className='nombrePeliculas'> {this.state.peliculas.title}</h2>
                            <div>
                            <p className='textoDetalle'>Descripcion: {this.state.peliculas.overview}</p>
                                <p className='textoDetalle'>Fecha de estreno: {this.state.peliculas.release_date}</p>
                                <p className='textoDetalle'>Rating: {this.state.peliculas.vote_average}</p>
                                <p className='textoDetalle'>Duracion: {this.state.peliculas.runtime} min</p>
                                <p className='addFav'onClick={()=>this.agregarYQuitarDeFavoritos(this.props.match.params.id)}> {this.state.favsMessage} </p>

                            </div>
                        </div>
                    </article>
                }
            </React.Fragment>
        )

    }
}

export default Detalle;