import React from "react";
import "./Carrossel.css";
import { Carousel } from 'react-bootstrap';



function Carrossel() {
  return (

    <Carousel>
  
      <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Imagem6.png"
              alt="First slide"
            ></img>
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Imagem 8.jpg"
              alt="Second slide" />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item> 
            <img
              className="d-block w-100"
              src="/images/Imagem99.png"
              alt="Third slide" />    
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
  )
}

export default Carrossel;