import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import FormFiltrar from '../FormFiltrar/FormFiltrar'


let urlPeliculasPopulares = "https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1"


class PeliculasPopulares extends Component {
    constructor() {
        super()
        this.state = {
            peliculasPopulares1: [],
            peliculasPopulares2: [],
            pagina: 1,
            input: '',
            data2: '',

        }
    }

    componentDidMount() {
        if (this.state.input !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1&query=${this.state.input}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ peliculasPopulares1: data.results }, () => console.log(data.results))
                })
                .catch(event => console.log(event))
        }
        else {
            //Traigo los datos de las peliculas mas populares
            fetch(urlPeliculasPopulares)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        peliculasPopulares1: data.results,
                        peliculasPopulares2: data.results,
                        pagina: 2
                    })
                }
                )
        }
    }
    traerMas() {
        //Traer la siguiente página
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=${this.state.pagina}`)
            .then(res => res.json())
            .then(data => this.setState({
                peliculasPopulares1: data.results.concat(this.state.peliculasPopulares1),
                peliculasPopulares2: data.results.concat(this.state.peliculasPopulares2),
                pagina: this.state.pagina + 1
            }))
            .catch()
    }
    filtrarPeliculas(Fil) { 
        let filtrarPeliculas = this.state.peliculasPopulares1.filter( unaPelicula => unaPelicula.title.toLowerCase().includes(Fil.toLowerCase()))
        this.setState({
            peliculasPopulares2: filtrarPeliculas,
        }, ()=>console.log(this.state))
    }

    render() {
        return (
            
                <React.Fragment>
                   
                    <div>
                    <FormFiltrar filtrarPeliculas={(Fil) => this.filtrarPeliculas(Fil)}></FormFiltrar>
                    </div>
                    <div className='boton'>
                        <button onClick={() => this.traerMas()} className='button1'> Traer más </button>
                        <h1 className="titulosHome">Películas populares</h1></div>

                    <section className="sectionHome">

                        {this.state.peliculasPopulares2 === [] ? <h3>Cargando</h3> :
                            this.state.peliculasPopulares2.map((unaPelicula, idx) => <PeliculaCard key={idx} unaPelicula={unaPelicula} />)
                        }
                    </section>
                </React.Fragment>
                
        )
    }
}

export default PeliculasPopulares;

//formulario para filtrar




