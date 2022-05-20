import React, {useState} from "react";
import "./products.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'

function Produtos() {
    const [clicks, setClicks] = useState([]);
    
    const handleIconClick = (id) => {
        let result =  clicks.includes(id)? clicks.filter(click => click !== id): [...clicks, id]
        setClicks(result)
   }

    return(
        <div className="bolos">
        
            <div className="titulo_linha">
                <h1 id="titulo">BOLOS</h1>
                <div className="linha"/>
            </div>
            
    
            <div className="fileira" style={{marginTop:150}}>
                <div className="componente">
                    <img src="/images/bolo-red-velvet.jpg" alt="redvelvet" className="imagem" />
                    <h4 id="texto">Bolo Red Velvet</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(0)}>
                            
                            {clicks.includes(0) ? < FavoriteIcon style={{ color: 'red', fontSize: 32}}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32}}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-unicornio.jpg" alt="unicornio" className="imagem" />
                    <h4 id="texto">Bolo Unicórnio </h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(1)}>
                            
                            {clicks.includes(1) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-flores.jpg" alt="flores" className="imagem" />
                    <h4 id="texto">Bolo Flores</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(2)}>
                            
                            {clicks.includes(2) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>  
    
                </div>
    
            </div>

            <div className="fileira">
                <div className="componente">
                    <img src="/images/bolo-misto.jpg" alt="misto" className="image" />
                    <h4 id="texto">Bolo Misto</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(3)}>
                            
                            {clicks.includes(3) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-suspiro.jpg" alt="suspiro" className="image" />
                    <h4 id="texto">Bolo Suspiro</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(4)}>
                            
                            {clicks.includes(4) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-canela.jpg" alt="canela" className="image" />
                    <h4 id="texto">Bolo Canela</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(5)}>
                            
                            {clicks.includes(5) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>  
    
                </div>
    
            </div>

            <div className="fileira" style={{marginBottom:50}}>
                <div className="componente">
                    <img src="/images/bolo-morango.jpg" alt="morango" className="image" />
                    <h4 id="texto">BOlo Morango</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(6)}>
                            
                            {clicks.includes(6) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-bolas.jpg" alt="bolas" className="image" />
                    <h4 id="texto">Bolo Bolas</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(7)}>
                            
                            {clicks.includes(7) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>
                </div>
    
                <div className="componente">
                    <img src="/images/bolo-tiramisu.jpg" alt="tiramisu" className="image" />
                    <h4 id="texto">Bolo Tiramisu</h4>

                    <div className="preco_favorito">
                        <h4 id="texto">R$ 35,00</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(8)}>
                            
                            {clicks.includes(8) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
                        </button>
                    </div>  
    
                </div>
    
            </div>
    
        </div>
    );
}

export default Produtos;