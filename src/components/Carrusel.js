import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel, CarouselItem} from 'react-bootstrap';
import herramientas from '../assets/img/herramientas-crear-paginas-web.jpg';
import http from '../assets/img/https.jpg';
import web from '../assets/img/webdeveloper.jpg';


const Carrusel = () => {
    return(
        // <Carousel fade>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={herramientas}
        //         alt="tools slide"
        //         />
        //         <Carousel.Caption>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={http}
        //         alt="http slide"
        //         />

        //         <Carousel.Caption>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        //     <Carousel.Item>
        //         <img
        //         className="d-block"
        //         src={web}
        //         alt="web slide"
        //         />

        //         <Carousel.Caption>
        //         </Carousel.Caption>
        //     </Carousel.Item>
        // </Carousel>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block" src={herramientas} alt="Tools slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block" src={http} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block" src={web} alt="Third slide"/>
                </div>
            </div>
        </div>
    )
}

export default Carrusel;