import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './screens/Home/Home';
import Populares from './screens/Populares/Populares';
import Cartelera from './screens/Cartelera/Cartelera'
import './app.css'



function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/populares"  component={Populares} />
          <Route exact path="/cartelera" component={Cartelera} />


        </Switch>
      </main>
      <Footer />

    </React.Fragment>
  );
}

export default App;
