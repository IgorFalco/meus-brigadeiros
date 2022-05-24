import React, {useState} from "react";
import "./products.css";
import Componente from "../../components/Componente/Componete";

const Redvelvet = {
    produtoid: "654821566",
    imagem: "/images/bolo-red-velvet.jpg",
    texto: "Bolo Red Velvet",
    preco: "R$ 35,00",
}; 

const Unicornio = {
    imagem: "/images/bolo-unicornio.jpg",
    texto: "Bolo Unicórnio",
    preco: "R$ 35,00",
};

const Flores = {
    imagem: "/images/bolo-flores.jpg",
    texto: "Bolo Flores",
    preco: "R$ 35,00",
};

const Misto = {
    imagem: "/images/bolo-misto.jpg",
    texto: "Bolo Misto",
    preco: "R$ 35,00"
};

const Suspiro = {
    imagem: "/images/bolo-suspiro.jpg",
    texto: "Bolo Suspiro",
    preco: "R$ 35,00"
};

const Canela = {
    imagem: "/images/bolo-canela.jpg",
    texto: "Bolo Canela",
    preco: "R$ 35,00"
};

const Morango = {
    imagem: "/images/bolo-morango.jpg",
    texto: "Bolo Morango",
    preco: "R$ 35,00"
};

const Bolas = {
    imagem: "/images/bolo-bolas.jpg",
    texto: "Bolo Bolas",
    preco: "R$ 35,00"
};

const Tiramisu = {
    imagem: "/images/bolo-tiramisu.jpg",
    texto: "Bolo Tiramisu",
    preco: "R$ 35,00"
};



function Produtos() {

    return(
        <div className="bolos">
        
            <div className="titulo_linha">
                <h1 id="titulo">BOLOS</h1>
                <div className="linha"/>
            </div>
            
    
            <div className="fileira" style={{marginTop:150}}>
              
                <Componente componente = {Redvelvet}/>
                
                <Componente componente = {Unicornio}/>
    
                <Componente componente = {Flores}/>
    
            </div>

            <div className="fileira">
                
                <Componente componente = {Misto}/>
    
                <Componente componente = {Suspiro}/>
    
                <Componente componente = {Canela}/>
    
            </div>

            <div className="fileira" style={{marginBottom:50}}>
                
                <Componente componente = {Morango}/>
    
                <Componente componente = {Bolas}/>
    
                <Componente componente = {Tiramisu}/>
    
            </div>
    
        </div>
    );
}

export default Produtos;