import React, {useState} from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Componente({produto}) {
    const [clicks, setClicks] = useState([]);
    
    const handleIconClick = (id) => {
        let result =  clicks.includes(id)? clicks.filter(click => click !== id): [...clicks, id]
        setClicks(result)
    }
    
    return(
    
        <div>
            <div className="componente">
                    <img src= {produto.caminho_imagem} alt="redvelvet" className="imagem" />
                    <h4 id="texto">{produto.título}</h4>
        
                    <div className="preco_favorito">
                        <h4 id="texto">{produto.preço}</h4>
                        <button className="botaofavorito" onClick={() => handleIconClick(0)}>
                            
                            {clicks.includes(0) ? < FavoriteIcon style={{ color: 'red', fontSize: 32}}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32}}/>}
                        </button>
                    </div>
                </div>
        </div>
    );
    
}

export default Componente;