import React, { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import api from "../../services/api";

function Componente({ produto, ids }) {
    const [clicks, setClicks] = useState(ids);



    const handleIconClick = (id) => {
        const data = {
            produto_id: id
        }
        clicks.includes(id) ? api.delete('/favoritos', { data }) : api.post('/favoritos', { produto_id: id });

        let result = clicks.includes(id) ? clicks.filter(click => click !== id) : [...clicks, id]
        setClicks(result);


    }

    return (

        <div>
            <div className="componente">
                <img src={produto.caminho_imagem} alt="redvelvet" className="imagem" />
                <h4 id="texto">{produto.título}</h4>

                <div className="preco_favorito">
                    <h4 id="texto">{produto.preço}</h4>
                    <button className="botaofavorito" onClick={() => handleIconClick(produto.produto_id)}>

                        {clicks.includes(produto.produto_id) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }} /> : <FavoriteBorderIcon style={{ color: 'black', fontSize: 32 }} />}
                    </button>
                </div>
            </div>
        </div>
    );

}

export default Componente;