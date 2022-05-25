import "./Perfil.css"
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

function editar(){
    window.location.href="/recadastro"
}
function Perfil() {

    const [Usuario, SetUsuario] = useState([]);

    async function getUser() {
        try {
            const response = await api.get("/usuarios");
            SetUsuario([...response.data.result]);

        } catch (error) {
            console.warn(error);
            alert("Algo deu errado");
        }
    }

    useEffect(() => {
        getUser();
    }, [])

    const history = useHistory();

    function editar(){
        window.location.href="/recadastro"
    }

    async function singOut() {
        logout();
        history.push("/home");
    }

    const primeiroNome = Usuario[0]?.nome.split(" ");
    console.log(primeiroNome)
    return (
        <div className="paginaCadastro">
            <div className="coluna-esquerda">
                <div className="boasvindas">
                    {primeiroNome &&
                        <h1>{primeiroNome[0]}</h1>
                    }
                    <p>, seja Bem Vindo (a) </p>
                </div>
                <img src="/images/PerfilRosto.png" alt="foto de perfil" id="perfil"></img>
                <input id="editarperfil" type="submit" value="Editar Perfil" onClick={editar} />
                <div className="dados">
                    <div className="linhaPerfil">

                        <h1>Nome:</h1> <p>{Usuario[0]?.nome}</p>
                    </div>
                    <div className="linhaPerfil">
                        <h1>Email:</h1> <p>{Usuario[0]?.email}</p>

                    </div>
                    <div className="linhaPerfil">
                        <h1>Endereço:</h1> <p>{Usuario[0]?.endereço}</p>
                    </div>
                </div>
                <input id="logout" type="submit" value="Logout" onClick={singOut} />
            </div>
            <div className="coluna-direita">
                <div className="carroselteste">

                </div>
                <div className="textinhoTitulo">
                    <div className="labellabel">
                        <label id="descricao">Descrição</label>
                        <img src="/images/descricao.png" alt="descricao" />
                    </div>
                    <p row="6" id="descricaoBox" name="descicao">{Usuario[0]?.descrição}</p>
                </div>
            </div>
        </div>
    );
}

export default Perfil;