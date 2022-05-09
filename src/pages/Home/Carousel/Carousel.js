import {useEffect, useRef} from 'react';
import React, { useState } from 'react';
import "./Carousel.css"
import {GrFavorite} from "react-icons/gr"

function Carousel() {

     const [data, setData] = useState([]);
     const carousel = useRef(null);

    useEffect(()=> {
        fetch('http://localhost:3000/images/itens.json').then((response)=>response.json()).then(setData);



    },[]);
      
    
    const handleLeftClick = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
      };
    
      const handleRightClick = (e) => {
        e.preventDefault();
    
        carousel.current.scrollLeft += carousel.current.offsetWidth;
      };
    
      if(!data || !data.length) return null;

    return(

       
   <div className="container">

    <div className="carousel" ref={carousel}>
        {data.map((item) => {
            const {id, name, price, image} = item;
            return(
        
    <div className="item" key={id}>
       <div className="image"> 
        <img src={image} alt= {name}/>
        </div> 
        <div className="info">
            <span className="name">{name}</span>
            <span className="price">{price}</span>        
                       
            
            </div>
              <GrFavorite className="favorito"/>
        </div>
            );
    })}
   
   
   
        </div>
        <div className = "buttons">
            <button onClick={handleLeftClick}>

            <img src= "/images/seta-esquerda.png" alt ="Scroll Left"/></button>

            <button> <button onClick={handleRightClick}></button>

            <img src= "/images/seta-direita.png" alt ="Scroll Right"/></button>
        </div>
   
        </div>
   
   
   
   ); 
}

export default Carousel;