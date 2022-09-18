import React, { Component } from 'react';
import PeliculaCard from '../PeliculaCard/PeliculaCard'
import { Link } from 'react-router-dom'


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

    evitarSubmit(event) {
        event.preventDefault();
    };
    guardarCambios(event) {
        this.setState({ input: event.target.value });
        if (event.target.value !== '') {
            let result = this.state.peliculasPopulares1.filter((unaPelicula) => {
                return unaPelicula.title.toLowerCase().includes(event.target.value)
            })
            console.log(result);
            this.setState({ data2: result }, () => console.log(this.state.data2))
        } else {
            this.setState({ data2: '' })
        }
    };

    render() {
        let mostrar;
        if (this.state.peliculasPopulares1 === '') {
            mostrar = 'Cargando'
        } else {
            if (this.state.data2 === '') {
                mostrar = this.state.peliculasPopulares1

            } else if (this.state.data2.length === 0) {
                mostrar = 'No se encontraron resultados'

            } else {
                mostrar = this.state.data2
            }
        }

        return (
            this.state.input.length === 0 ?
                <React.Fragment>
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <input type='text' placeholder='Pelicula' onChange={(event) => this.guardarCambios(event)} value={this.state.input} />
                        <input type='submit' value='Buscar' />
                    </form>
                    <div className='boton'>
                        <button onClick={() => this.traerMas()} className='button1'> Traer más </button>
                        <h1 className="titulosHome">Películas populares</h1></div>

                    <section className="sectionHome">

                        {this.state.peliculasPopulares === [] ? <h3>Cargando</h3> :
                            this.state.peliculasPopulares1.map((unaPelicula, idx) => <PeliculaCard key={idx} unaPelicula={unaPelicula} />)
                        }



                    </section>



                </React.Fragment>
                :
                <React.Fragment>
                    <main className='main'>
                        <form onSubmit={(event) => this.evitarSubmit(event)}>
                            <input type='text' onChange={(event) => this.guardarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.input} />
                        </form>
                        {this.state.peliculasPopulares1 === 0 ? <h1>Cargando...</h1> : this.state.peliculasPopulares1.map((unaPelicula, idx) => <PeliculaCard unaPelicula={unaPelicula} key={unaPelicula.title + idx} />)}

                    </main>
                </React.Fragment>
        )
    }
}

export default PeliculasPopulares;

//formulario para filtrar




