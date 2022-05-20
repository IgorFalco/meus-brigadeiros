import React, {useState} from "react";
import "./frame.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite'


export default function Frame() {
  const [clicks, setClicks] = useState([]);
    
    const handleIconClick = (id) => {
        let result =  clicks.includes(id)? clicks.filter(click => click !== id): [...clicks, id]
        setClicks(result)
   }
  
  return (
    <div className="frame">
      <div className="maisquerido">
        <h1>Mais queridos</h1>
      </div>
      <div className="produtos">
        <div className="component">
          <img src="/images/brigadeiro-rainbow.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Brigadeiro Confeitado (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 14,90</h4>
            <button className="botaofavorito" onClick={() => handleIconClick(0)}>
                {clicks.includes(0) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32}}/>}
            </button>
          </div>
        </div>

        <div className="component">
          <img src="/images/donut-sensação.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Donut Sensação (Unid)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 5,00</h4>
            <button className="botaofavorito" onClick={() => handleIconClick(1)}>
               {clicks.includes(1) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
            </button>
          </div>

        </div>

        <div className="component">
          <img src="/images/brigadeiro-tradicional.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Brigadeiro tradicional (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 10,60</h4>
            <button className="botaofavorito" onClick={() => handleIconClick(2)}>
               {clicks.includes(2) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
            </button>
          </div>

        </div>

        <div className="component">
          <img src="/images/beijinho.jpg" alt="brigadeiro" className="image" />
          <h4 id="text">Beijinho (200g)</h4>

          <div className="preco-favorito">
            <h4 id="text">R$ 10,60</h4>
            <button className="botaofavorito" onClick={() => handleIconClick(3)}>
               {clicks.includes(3) ? < FavoriteIcon style={{ color: 'red', fontSize: 32 }}/> : <FavoriteBorderIcon  style={{ color: 'black', fontSize: 32 }}/>}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}