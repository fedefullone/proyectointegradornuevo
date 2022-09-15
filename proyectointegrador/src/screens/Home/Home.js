import React, { Component } from "react";
import './home.css';
import Pelicula from '../../components/Pelicula/Pelicula';

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
                    <form onSubmit={(event) => this.prevRecarga(event)}>
                        <input type='text' placeholder='pelicula' onChange={(event) => this.saveChanges(event)} value={this.state.input} />
                        <input type='submit' value='submit' />
                    </form>

                   

                </React.Fragment>

                :

                <React.Fragment>
                    <form onSubmit={(event) => this.prevRecarga(event)}>
                        <input type='text' placeholder='pelicula' onChange={(event) => this.saveChanges(event)} value={this.state.input} />
                        <input type='submit' value='submit' />
                    </form>

                    {this.state.data === '' ? <h3>Cargando</h3> :
                        <section className='card-container'>
                            {this.state.data.map((unaPelicula, idx) => <UnaPeliculaListado key={idx} props={unaPelicula} />)}
                        </section>
                    }
                </React.Fragment>
        )
    }
}

export default Home;