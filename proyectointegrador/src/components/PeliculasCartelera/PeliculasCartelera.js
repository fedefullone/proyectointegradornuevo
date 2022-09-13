import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import './peliculascartelera.css'


let urlPeliculasCartelera = "https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1";


class PeliculasCartelera extends Component {
    constructor() {
        super()
        this.state = {
            peliculasCartelera1: [],
            peliculasCartelera2: [],
            pagina: 1, 
        }
    }

    componentDidMount() {
        //Traigo los datos de las peliculas mas populares
        fetch(urlPeliculasCartelera)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    peliculasCartelera1: data.results,
                    peliculasCartelera2: data.results,
                    pagina: 2                })
            }
            )
    }
    traerMas(){
        //Traer la siguiente página
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=${this.state.pagina}`)
            .then( res => res.json())
            .then( data => this.setState({
                peliculasCartelera1: data.results.concat(this.state.peliculasCartelera1),
                peliculasCartelera2: data.results.concat(this.state.peliculasCartelera2),
                pagina: this.state.pagina + 1
            }))
            .catch()
    }

    
    render(){
        
           
        return(
            <React.Fragment>
                <div className='boton'>
            <button onClick={()=>this.traerMas()} className="button1"> Traer más </button>
                <h1  className="titulosHome">Películas en cartelera</h1></div>

                <section className="sectionHome">
               

                    {this.state.peliculasCartelera === [] ? <h3>Cargando</h3> : 
                    this.state.peliculasCartelera1.map((unaPelicula, idx)=> <PeliculaCard key={idx} unaPelicula={unaPelicula}  />)
                    }
                
</section>



            </React.Fragment>
        )
    }
}

export default PeliculasCartelera;