import React from "react";
import "./frame.css"
import { GrFavorite } from "react-icons/gr"


export default function Frame() {
  return (
    <div className="frame">

        <h1 id="title">Mais queridos</h1>

      <div className="produtos">
        <div className="component">
          <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Brigadeiro Confeitado (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 14,90</h4>
            <GrFavorite className="favorito" size={30} />
          </div>
        </div>

        <div className="component">
          <img src="/images/donut-sensação.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Donut Sensação (Unid)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 5,00</h4>
            <GrFavorite className="favorito" size={30} />
          </div>

        </div>

        <div className="component">
          <img src="/images/brigadeiro-tradicional.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Brigadeiro tradicional (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 10,60</h4>
            <GrFavorite className="favorito" size={30} />
          </div>

        </div>

        <div className="component">
          <img src="/images/beijinho.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Beijinho (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 10,60</h4>
            <GrFavorite className="favorito" size={30} />
          </div>

        </div>

      </div>

    </div>
  );
}