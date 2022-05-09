import React from "react";
import "./Carrossel.css";
import {Carousel} from 'react-bootstrap';

function Carrossel(){
  return ( 

     <Carousel>
        <Carousel.Item>
         <img
            className="d-block w-100"
            src="/images/Imagem6.png"
          ></img>
          
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Imagem 8.jpg"/>
          />

      <Carousel.Caption>
       </Carousel.Caption>
       </Carousel.Item>
      <Carousel.Item>
       <img
      className="d-block w-100"
      src="/images/Imagem 8.jpg"/>
      alt="Third slide"
       />

        <Carousel.Caption>
        <h3>Third slide label</h3>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
         </Carousel.Caption>
           </Carousel.Item>
    </Carousel>
  )
}

export default Carrossel;