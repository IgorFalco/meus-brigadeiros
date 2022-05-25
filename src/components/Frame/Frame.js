import React, { useEffect, useState } from "react";
import "./frame.css"
import Componente from "../Componente/Componete";
import api from "../../services/api";



export default function Frame() {

  const [ids, setIds] = useState([]);
  const Brigadeiro_Confeitado = {
    produto_id: "Brigadeiro_Confeitado",
    título: "Brigadeiro Confeitado (200g)",
    preço: "R$ 14,90",
    caminho_imagem: "/images/brigadeiro-rainbow.jpg"
  }
  const Brigadeiro = {
    produto_id: "Brigadeiro",
    título: "Brigadeiro Tradicional (200g)",
    preço: "R$ 10,60",
    caminho_imagem: "/images/brigadeiro-tradicional.jpg"
  }
  const Donut_Sensação = {
    produto_id: "Donut_Sensação",
    título: "Donut Sensação (Unid)",
    preço: "R$ 5,00",
    caminho_imagem: "/images/donut-sensação.jpg"
  }
  const Beijinho = {
    produto_id: "Beijinho",
    título: "Beijinho (200g)",
    preço: "R$ 10,60",
    caminho_imagem: "/images/beijinho.jpg"
  }

  useEffect(() => {
    api.get("/favoritos").then((response) => {
      var output = [];
      for (var i = 0; i < response?.data?.result?.length; ++i) {
        output.push(response?.data?.result[i]['Brigadeiro_Confeitado']);
        output.push(response?.data?.result[i]['Brigadeiro']);
        output.push(response?.data?.result[i]['Donut_Sensação']);
        output.push(response?.data?.result[i]['Donut_Sensação']);
      }
      setIds(output);
    })
  }, [])

  return (
    <div className="frame">
      <div className="maisquerido">
        <h1>Mais queridos</h1>
      </div>
      <div className="produtos">
        {
          ids &&
          <Componente produto={Brigadeiro_Confeitado} ids={ids} />
        }
         {
          ids &&
          <Componente produto={Donut_Sensação} ids={ids} />
        }
        {
          ids &&
          <Componente produto={Brigadeiro} ids={ids} />
        }
        {
          ids &&
          <Componente produto={Beijinho} ids={ids} />
        }
      

      </div>

    </div>
  );
}