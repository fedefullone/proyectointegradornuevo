import React, { Component } from "react";
import './home.css';
import Pelicula from '../../components/Pelicula/Pelicula';
import PeliculaCard from '../../components/PeliculaCard/PeliculaCard'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '',
            data: []
        }
    }


    evitarSubmit(event) {
        event.preventDefault()
    }

    guardarCambios(event) {
        this.setState({ input: event.target.value }, () => {
            console.log(this.state.input);
            this.busqueda()
        })
    }

    busqueda() {
        if (this.state.input !== '') {
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=d7005b857875520a55d00ac604b383c7&language=en-US&page=1&query=${this.state.input}`)
                .then(res => res.json())
                .then(data => {
                    this.setState({ data: data.results }, () => console.log(data.results))
                })
                .catch(event => console.log(event))
        }
    }

    render() {
        return (
            this.state.input.length === 0 ?
                <React.Fragment>
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <input type='text' placeholder='Pelicula' onChange={(event) => this.guardarCambios(event)} value={this.state.input} />
                        <input type='submit' value='Buscar' />
                    </form>
                    <section class="home">
                        <Pelicula />
                    </section>



                </React.Fragment>

                :

                <React.Fragment>
                    <main className='main'>
                        <form onSubmit={(event) => this.evitarSubmit(event)}>
                            <input type='text' onChange={(event) => this.guardarCambios(event)} placeholder="Buscar Pelicula" name="usuario" value={this.state.input} />
                        </form>
                        {this.state.data === 0 ? <h1>Cargando...</h1> : this.state.data.map((unaPelicula, idx) => <PeliculaCard unaPelicula={unaPelicula} key={unaPelicula.title + idx} />)}

                    </main>
                </React.Fragment>

        )
    }
}



export default Home;