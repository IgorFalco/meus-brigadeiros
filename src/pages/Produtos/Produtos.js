import React, { useEffect, useState } from "react";
import "./products.css";
import Componente from "../../components/Componente/Componete";
import api from "../../services/api";

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    async function getProdutos() {
        try {
            const response = await api.get("/produtos");
            setProdutos([...response.data.result]);
        } catch (error) {
            console.warn(error);
            alert("Deu ruim")
        }
    }

    useEffect(() => {
        getProdutos();
    }, [])

    return (
        <div className="bolos">

            <div className="titulo_linha">
                <h1 id="titulo">Produtos</h1>
                <div className="linha" />
            </div>

            <div className="fileira" style={{ marginTop: 150 }}>

                {
                    produtos &&
                    produtos.map((produto) => (
                        <Componente key={produto.produto_id} produto={produto} />
                    ))}

            </div>

        </div>
    );
}

export default Produtos;