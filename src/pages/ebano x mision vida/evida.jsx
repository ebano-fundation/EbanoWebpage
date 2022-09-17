import react from 'react'
import {Link } from "react-router-dom";

//css
import "./evida.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';



//importing imgs
import ebn from "./imgs/exmv1.jpg"
import ebn2 from "./imgs/exmv2.jpg"
import ebn3 from "./imgs/exmv3.jpg"
import ebn4 from "./imgs/exmv4.jpg"
import ebn5 from "./imgs/exmv5.jpg"
import ebn6 from "./imgs/exmv6.jpg"
import ebn7 from "./imgs/exmv7.jpg"
import ebn8 from "./imgs/exmv8.jpg"
import ebn9 from "./imgs/exmv9.jpg"

import ebanovida from "./imgs/ebanovida.jpg"

const Evida = () =>
{
    return (
        <html>
            <title id= "ebano X mision Vida"></title>
            { /* body */}
            <body>
                <img className ="ebanovida" src={ebanovida} alt="ebano X mision Vida" />
                <Carousel>
                    <Carousel.Item>
                        <img
                           className="d-block h-75%"
                            src={ebn}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn4}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn5}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn6}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn7}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn8}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                          className="d-block h-75%"
                            src={ebn9}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </body>
        </html>
    );
}

export default Evida;
