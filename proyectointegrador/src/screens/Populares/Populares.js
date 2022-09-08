import React from 'react';
import TodasPeliculas from '../../components/TodasPeliculas/TodasPeliculas';


function Populares (){
    return(
        <React.Fragment>
            <TodasPeliculas pagina={true}   />
        </React.Fragment>
    )
}



export default Populares;