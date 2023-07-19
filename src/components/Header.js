import React from 'react';
import logo from '../assets/img/logo.png';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
        <Link to="/"id="nav-a" href="#">
          <img src={logo} class="logo" alt="logo"/>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto mr-5">
            <li class="nav-item mr-5">
              <Link to="/" class="nav-link">Inicio</Link>
            </li>
            <li class="nav-item mr-5">
              <Link to="/nosotros" class="nav-link">Nosotros</Link>
            </li>

            <li class="nav-item">
              <Link to="/contacto" class="nav-link">Contacto</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Header;