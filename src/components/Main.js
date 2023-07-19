import React, {Fragment} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, CardGroup} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import Carrusel from './Carrusel';
import desarrollo from '../assets/img/Desarrollo.jpg';
import responsive from '../assets/img/responsiveweb.jpg';
import responsive2 from '../assets/img/responsiveweb2.jpg';


const Main = () => {
    return(
    <Fragment>
    <Carrusel />
    <div id="container">
        <h1 id="header">Nuestros Servicios</h1>

      <div className="row row-cols-1 row-cols-md-3">
          <div className="mainCol">
            <div className="mainCard h-100">
              <img src={desarrollo} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title mb-5">Sitio Web</h5>
                <p className="card-text">Desarrollamos páginas, sitios o apps web para presentar tus productos y/o servicios más populares. Siempre apegandonos a tus gustos y preferencias en el diseño. Contamos con paquetes para tu mayor comodidad y beneficio.</p>
                <Link to="/additional" id="info">Leer más...</Link>
              </div>
            </div>
          </div>
          <div className="mainCol mb-4">
            <div className="mainCard h-100">
              <img src={responsive} className="card-img card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title mb-4">Planeación bajo necesidades</h5>
                <p className="card-text" id="plan">Nos enfocamos en las necesidades de tu negocio para que tengas la mayor satisfacción del producto que te entregamos.</p>
              </div>
            </div>
          </div>
          <div className="mainCol mb-1">
            <div className="mainCard h-100">
              <img src={responsive2} className="card-img card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title mb-5">Responsive Web</h5>
                <p className="card-text">Tu página la podran ver con una excelente calidad en cualquier dispositivo ya sea celular, tablet, laptop o pantalla.</p>
              </div>
            </div>
          </div>
      </div>
    </div>
    </Fragment>
    
    )
}

export default Main;

