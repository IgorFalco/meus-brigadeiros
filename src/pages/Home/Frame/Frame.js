import React from "react";
import "./frame.css"
import {GrFavorite} from "react-icons/gr"


export default function Frame () {
  return(
    <div className="frame">
      <div className="title">
        <h1>Mais queridos</h1>
      </div>
     
      <div className="component">
        <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image"/>
        <h4 className="text">Brigadeiro Confeitado (200g)</h4>
        
        <div className="preco-favorito">
          <h4 className="text">R$ 14,90</h4>
          <GrFavorite className="favorito"/>
        </div>
      
      </div>
      
      <div className="component">
        <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image"/>
        <h4 className="text">Brigadeiro Confeitado (200g)</h4>
        
        <div className="preco-favorito">
          <h4 className="text">R$ 14,90</h4>
          <GrFavorite className="favorito"/>
        </div>

     </div>
      
      <div className="component">
        <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image"/>
        <h4 className="text">Brigadeiro Confeitado (200g)</h4>
        
        <div className="preco-favorito">
          <h4 className="text">R$ 14,90</h4>
          <GrFavorite className="favorito"/>
        </div>

     </div>
      
      <div className="component">
        <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image"/>
        <h4 className="text">Brigadeiro Confeitado (200g)</h4>
         
        <div className="preco-favorito">
          <h4 className="text">R$ 14,90</h4>
          <GrFavorite className="favorito"/>
        </div>
        
     </div>

     
     
    </div>
  );
}