import React, {Fragment} from 'react';
import Main from './components/Main';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Additional from './components/Additional';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'



function App() {
  return (
    <Router>
      <div id="container">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/additional">
            <Additional />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>

    
  
  );
}

export default App;
