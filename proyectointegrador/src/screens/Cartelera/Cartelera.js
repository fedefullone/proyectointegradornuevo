import React from 'react';
import TodasPeliculas from '../../components/TodasPeliculas/TodasPeliculas';


function Cartelera (){
    return(
        <React.Fragment>
            <TodasPeliculas pagina={false}   />
        </React.Fragment>
    )
}



export default Cartelera;