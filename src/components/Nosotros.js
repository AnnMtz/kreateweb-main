import React, {Fragment} from 'react';
import company from '../assets/img/empresa.jpg';
import values from '../assets/img/valores.jpg';
import mision from '../assets/img/mision.jpg';
import mision2 from '../assets/img/mision_vision_valores.jpg';

const Nosotros = () => {
    return(
        <div className="container-fluid">
        <div className="about-img">
            <div className="image">
                <img src={company} id="company" alt="" />
            </div>
            <h1>NUESTRA EMPRESA</h1>
            <h3>La única que se preocupa por ti</h3>
        </div>

          <div className="row row-cols-1 row-cols-md-3 mt-5 pt-5">
            <div className="col mb-4">
              <div className="card h-100">
                <img src={values} className="card-vmv card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title mb-5">Valores</h5>
                  <p className="card-text">
                      <ul id="values-list">
                          <li>Honestidad</li>
                          <li>Compromiso</li>
                          <li>Respeto</li>
                          <li>Confiabilidad</li>
                      </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                <img src={mision} className="card-vmv card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title mb-5">Misión</h5>
                  <p className="card-text">Darte un excelente producto que te ayude a cumplir todas tus metas, brindandote el mejor servicio y atención.</p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card h-100">
                <img src={mision2} className="card-vmv card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title mb-5">Visión</h5>
                  <p className="card-text">Nuestra prioridad es que logres tus objetivos, haciendo que tu empresa o negocio sea visual dentro de internet y las redes sociales, para así maximisar tus ganancias</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Nosotros;