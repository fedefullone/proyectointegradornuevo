import react from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import React from 'react';

function App() {
  return (
    <React.Fragment>
    <div>
      <h1>Hola</h1>
      <Header/>
      <Footer/>
    </div>
    <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
