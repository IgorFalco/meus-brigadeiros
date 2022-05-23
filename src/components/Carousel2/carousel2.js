import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 100, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },

];

function donuts() {
  alert("Você será adocicado com nossos Donuts!!");
}

function bolos() {
  alert("Você será aprazerado com nossos Bolos!!");
}

function docinhos() {
  alert("Você verá nossos docinhos igual você!!");
}

function Carousel2() {
  return (

    <div className="AdoceSeuDiaParte">
      <div className="tituloAdoce">
        <h1>Adoce seu dia!</h1>

      </div>

      <div className="App">
        <Carousel breakPoints={breakPoints}>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut valentine´s.jpg" alt=" ">
            </img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut rainbow.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut magrelo.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo morango.jpg" alt=" "
            ></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/Bolo tiramisu.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com cereja.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/alfajor.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 4.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 5.jpg" alt=" "
            ></img></Item>
          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut fruta.jpg" alt=" ">
            </img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut misto.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut urso.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com bolas.jpg" alt=" "
            ></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo red velvet.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo unicornio.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 6.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 3.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 1.jpg" alt=" "
            ></img></Item>
          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut valentine´s.jpg" alt=" ">
            </img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut rainbow.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut magrelo.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo morango.jpg" alt=" "
            ></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/Bolo tiramisu.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com cereja.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/alfajor.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 4.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 5.jpg" alt=" "
            ></img></Item>
          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut fruta.jpg" alt=" ">
            </img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut misto.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut urso.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com bolas.jpg" alt=" "
            ></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo red velvet.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo unicornio.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 6.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 3.jpg" alt=" "
            ></img></Item>

          <Item>
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 1.jpg" alt=" "
            ></img></Item>
        </Carousel>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carousel2 />, rootElement);
export default Carousel2;