import React, { useEffect, useState } from "react";
import "../Produtos/products.css";
import Componente from "../../components/Componente/Componete";
import api from "../../services/api";


function Favoritos() {
    const [favoritos, setFavoritos] = useState([]);

    async function getFavoritos() {
        try {
            const response = await api.get("/favoritos");
            setFavoritos([...response.data.result]);
        } catch (error) {
            console.warn(error);
            alert("Deu ruim")
        }
    }

    useEffect(() => {
        getFavoritos();
    }, [])

    return (
        <div className="bolos">

            <div className="titulo_linha">
                <h1 id="titulo">Favoritos</h1>
                <div className="linha" />
            </div>

            <div className="fileira" style={{ marginTop: 150 }}>

                {
                    favoritos &&
                    favoritos.map((favorito) => (
                        <Componente key={favorito.produto_id} favorito={favorito} />
                    ))}

            </div>

        </div>
    );
}

export default Favoritos;