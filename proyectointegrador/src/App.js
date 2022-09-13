import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera'
import Detalle from './screens/Detalle/Detalle'
import Error404 from './screens/Error404/Error404';
import './app.css'



function App() {
  return (
    <React.Fragment>
      <Header/>
      <main>
    <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/populares"  component={Populares} />
          <Route exact path="/cartelera"  component={Cartelera} />
          <Route path='/detalle/id/:id' component={Detalle}/>
          <Route path="" component={Error404} />
        </Switch>  
        </main>
      <Footer/>

    </React.Fragment>
  );
}

export default App;
