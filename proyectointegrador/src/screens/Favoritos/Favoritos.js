import React, {Component} from 'react';
import PeliculaCard from '../../components/PeliculaCard/PeliculaCard';

class Favoritos extends Component{
    constructor(){
        super();
        this.state = {
            peliculas: []
        }
    }

    componentDidMount(){
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos')

        if(recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage)
            let peliculasFavs = [];

            favoritos.map(unIdFavorito =>{
                //pedir por cada id los datos de la pelicula
                let url = `https://api.themoviedb.org/3/movie/${unIdFavorito}?api_key=d7005b857875520a55d00ac604b383c7&language=en-US`
            fetch(url)
                .then(res => res.json())
                .then(data =>{
                peliculasFavs.push(data)
                this.setState({
                peliculas : peliculasFavs
                })
            })
                .catch(e => console.log(e))
            })
            //recorrer el array y pedirle al endpoint por los datos de cada pelicula
        }
    }
   
    render(){
        return(
            <React.Fragment>
                <h2 className='titulosHome'>Mis peliculas favoritas</h2>
                <section className="sectionHome">
                    {this.state.peliculas.map((unaPelicula, idx)=> <PeliculaCard key={unaPelicula.name + idx} unaPelicula={unaPelicula}  />)
                    }
                </section>

            </React.Fragment>
        )
    }
}

export default Favoritos