import React from 'react';
import {Link} from 'react-router-dom';
import logo from "../assets/img/logo.png";
import face from '../assets/img/face.png';
import twitter from '../assets/img/twitter.png';
import instagram from '../assets/img/instagram.png';

const Footer = () => {
    return(
        <footer>
          <div className='foooterContainer'>
          <div className="footer">
              <a id="nav-f" href="#" >
              <img src={logo} className="logo" alt="logo"/>
             </a>
              <button id="button"type="submit" mr-5><Link to="/contacto">Contacto</Link></button>
          </div>
          <div className="cards">
            <div className="row row-cols-1 row-cols-md-3 pl-5">
              <div className="col">
                <p className="paragraph">La mejor solución</p>
              </div>
              <div className="col mb-2">
                <p id="second-paragraph" className="paragraph">Información de contacto</p>
                <span className="contact-info">Telefóno: 55 8686 0053</span>
                <span className="contact-info">Email: equipo.soporte@kreateweb.com.mx</span>
              </div>
              <div className="social-media redesCol mb-4">
                <img src={face} alt="facebook" id="face"/>
                <img src={twitter} alt="" className="redes mr-3" />
                <img src={instagram} alt="" className="redes mr-4" />
              </div>
            </div>
          </div>

          </div>
        </footer>
    );
}

export default Footer;