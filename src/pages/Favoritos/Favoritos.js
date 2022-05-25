import React, { useEffect, useState } from "react";
import "../Produtos/products.css";
import Componente from "../../components/Componente/Componete";
import api from "../../services/api";

function Produtos() {
    const [favoritos, setProdutos] = useState([]);
    const [ids, setIds] = useState([]);

    async function getProdutos() {
        try {
            const response = await api.get("/favoritos");
            setProdutos([...response.data.result]);
        } catch (error) {
            console.warn(error);
            alert("Deu ruim")
        }
    }

    useEffect(() => {
        getProdutos();
    }, [])

    useEffect(() => {
        getProdutos();
    }, [favoritos])

    useEffect(() => {
        api.get("/favoritos").then((response) => {
            var output = [];
            for (var i = 0; i < response?.data?.result?.length; ++i) {
                output.push(response?.data?.result[i]['produto_id']);
            }
            setIds(output);
        })
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
                    favoritos.map((produto) => (
                        <Componente key={produto.produto_id} produto={produto} ids={ids} />
                    ))}

            </div>

        </div>
    );
}

export default Produtos;