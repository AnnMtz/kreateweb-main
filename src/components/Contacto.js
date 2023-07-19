import React from 'react';
import contact from '../assets/img/contacto.jpg';
import telephone from '../assets/img/telefono.png';
import email from '../assets/img/email.png';

const Contacto = () => {
    return(
        <div className="container-fluid">
        <div className="about-img mb-5">
            <div className="image">
                <img src={contact} id="company" alt=""/>
            </div>
            <h1>CONTACTANOS</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <div className="contact-card card-body">
                  <h5 className="card-title">Escribenos tus dudas</h5>
                  <p className="card-text mt-4 ml-5">
                      <img src={telephone} className="contact-icons mr-4" alt="telefono"/>
                      <span>55 8686 0053</span>
                  </p>
                  <p className="card-tex ml-5">
                    <img src={email} className="contact-icons mr-4" alt="email"/>
                    <span>Email</span>  
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <div className="contact-card card-body">
                  <h5 className="card-title">Enviar mensaje</h5>
                  <p className="card-text">
                      <form>
                          <label for="name">Nombre</label>
                          <input type="text" name="name" placeholder="Escribe tu nombre"/>
                          <label for="email">Email</label>
                          <input type="email" name="email" placeholder="Escribe tu email"/>
                          <label for="asunto">Asunto</label>
                          <input type="text" name="asunto" placeholder="Escribe el asunto"/>
                          <label for="message">Mensaje</label>
                          <textarea name="message" cols="30" rows="10" placeholder="Dejanos un mensaje"></textarea>
                          <button type="submit">Enviar</button>
                      </form>
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Contacto