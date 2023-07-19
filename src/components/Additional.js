import React from 'react';
import diseño from '../assets/img/diseñoweb.jpg';

const Additional = () => {
    return(
        <div className="container-fluid">
            <div className="about-img mb-5">
                <div className="image">
                    <img src={diseño} id="company" alt="" />
                </div>
                <h1>FORMA DE TRABAJO</h1>
            </div>
            <blockquote>Nuestra forma de trabajo la seccionamos en 5 pasos para tu mayor tranqulidad, facilidad, beneficio y confianza.</blockquote>
            <div className="row row-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <h2 className="card-title-add">Desarrollo</h2>
                    <div className="card-add mx-5">
                        <div className="contact-card card-body-add">
                            <h5 className="card-text-add ml-5">1. Platicaremos a fondo de tus requerimientos y necesidades.</h5>
                            <h5 className="card-text-add ml-5">2. Basado en lo que necesites, te ofrecemos la mejor solución y te cotizamos.</h5>
                            <h5 className="card-text-add ml-5">3. Para iniciar, solo debes dar el 50% de anticipo.</h5>
                            <h5 className="card-text-add ml-5">4. Haremos el diseño del prototipo, y una vez que sea de tu agrado comenzamos el desarrollo.</h5>
                            <h5 className="card-text-add ml-5">5. Finalizamos el trabajo, lo entregamos y se realiza la liquidación.</h5>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <h2 className="card-title-add">Marketing Digital</h2>
                    <div className="card-add mx-5">
                        <div className="contact-card card-body-add">
                            <h5 className="card-text-add ml-5">Te podemos incluir el Marketing Digital en Redes Sociales:</h5>
                            <ul id="redes">
                                <li>- Google</li>
                                <li>- Facebook</li>
                                <li>- Twitter</li>
                                <li>- Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Additional;