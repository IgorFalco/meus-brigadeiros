import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width:100, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
 
];

function donuts(){
  alert("Você será adocicado com nossos Donuts!!");
}

function bolos(){
  alert("Você será aprazerado com nossos Bolos!!");
}

function docinhos(){
  alert("Você verá nossos docinhos igual você!!");
}

function Carousel2() {
  return (
    
      
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          
          <Item> 
          <img onClick={donuts} src="/Dados/Imagens/donut valentine´s.jpg">
</img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut rainbow.jpg"
></img></Item>

          <Item>
             <img onClick={donuts} src="/Dados/Imagens/donut magrelo.jpg"
></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo morango.jpg"
></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/Bolo tiramisu.jpg"
></img></Item>

          <Item> 
            <img onClick={bolos} src="/Dados/Imagens/bolo com cereja.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/alfajor.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 4.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 5.jpg"
></img></Item>
<Item> 
          <img onClick={donuts} src="/Dados/Imagens/donut fruta.jpg">
</img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut misto.jpg"
></img></Item>

          <Item>
             <img onClick={donuts} src="/Dados/Imagens/donut urso.jpg"
></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com bolas.jpg"
></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo red velvet.jpg"
></img></Item>

          <Item> 
            <img onClick={bolos} src="/Dados/Imagens/bolo unicornio.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 6.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 3.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 1.jpg"
></img></Item>
<Item> 
          <img onClick={donuts} src="/Dados/Imagens/donut valentine´s.jpg">
</img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut rainbow.jpg"
></img></Item>

          <Item>
             <img onClick={donuts} src="/Dados/Imagens/donut magrelo.jpg"
></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo morango.jpg"
></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/Bolo tiramisu.jpg"
></img></Item>

          <Item> 
            <img onClick={bolos} src="/Dados/Imagens/bolo com cereja.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/alfajor.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 4.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 5.jpg"
></img></Item>
<Item> 
          <img onClick={donuts} src="/Dados/Imagens/donut fruta.jpg">
</img>  </Item>

          <Item>
            <img onClick={donuts} src="/Dados/Imagens/donut misto.jpg"
></img></Item>

          <Item>
             <img onClick={donuts} src="/Dados/Imagens/donut urso.jpg"
></img></Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo com bolas.jpg"
></img> </Item>

          <Item>
            <img onClick={bolos} src="/Dados/Imagens/bolo red velvet.jpg"
></img></Item>

          <Item> 
            <img onClick={bolos} src="/Dados/Imagens/bolo unicornio.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 6.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 3.jpg"
></img></Item>

          <Item> 
            <img onClick={docinhos} src="/Dados/Imagens/Imagem 1.jpg"
></img></Item>
            </Carousel>
      </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Carousel2 />, rootElement);
export default Carousel2;