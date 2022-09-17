import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import c1 from '../../imgs/carrousel/c1.png'
import c2 from '../../imgs/carrousel/c2.png'

export default  function Carrousel(){
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>estmos para ellos</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>ellos nos necesitan</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={c1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>queremos hacer un cambio</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
  

