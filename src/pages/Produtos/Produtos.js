import React from "react";
import { GrFavorite } from "react-icons/gr"
import "./products.css";

function Produtos() {
    return(
        <div className="bolos">
        
            <div className="titulo_linha">
                <h1 id="titulo">BOLOS</h1>
                <div className="linha"/>
            </div>
            
    
            <div className="fileira">
                <div className="componente">
                    <img src="/images/bolo-red-velvet.jpg" alt="redvelvet" className="imagem" />
                    <h4 id="texto">Bolo Red Velvet</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-unicornio.jpg" alt="unicornio" className="imagem" />
                    <h4 id="texto">Bolo Unicórnio </h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-flores.jpg" alt="flores" className="imagem" />
                    <h4 id="texto">Bolo Flores</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>  
    
                </div>
    
            </div>

            <div className="fileira">
                <div className="componente">
                    <img src="/images/bolo-misto.jpg" alt="misto" className="image" />
                    <h4 id="texto">Bolo Misto</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-suspiro.jpg" alt="suspiro" className="image" />
                    <h4 id="texto">Bolo Suspiro</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-canela.jpg" alt="canela" className="image" />
                    <h4 id="texto">Bolo Canela</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="favorito" size={30} />
                    </div>  
    
                </div>
    
            </div>

            <div className="fileira">
                <div className="componente">
                    <img src="/images/bolo-morango.jpg" alt="morango" className="image" />
                    <h4 id="texto">BOlo Morango</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="coracao" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-bolas.jpg" alt="bolas" className="image" />
                    <h4 id="texto">Bolo Bolas</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="coracao" size={30} />
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-tiramisu.jpg" alt="tiramisu" className="image" />
                    <h4 id="texto">Bolo Tiramisu</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <GrFavorite className="coracao" size={30} />
                    </div>  
    
                </div>
    
            </div>
    
        </div>
    );
}

export default Produtos;