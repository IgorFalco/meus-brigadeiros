import React from "react";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";



function DadosPefil({ props }) {
    const history = useHistory();

    async function singOut() {
        logout();
        history.push("/home");
    }
    return (
        <div>
            <div className="coluna-esquerda">
                <div className="boasvindas">
                    <h1>Ana</h1>
                    <p>, seja Bem Vindo (a) </p>
                </div>
                <img src="/images/PerfilRosto.jpg" alt="foto de perfil" id="perfil"></img>
                <input id="editarperfil" type="submit" value="Editar Perfil" />
                <div className="dados">
                    <div className="linhaPerfil">

                        <h1>Nome:</h1> <p>{props.nome}</p>
                    </div>
                    <div className="linhaPerfil">
                        <h1>Email:</h1> <p>{props.email}</p>

                    </div>
                    <div className="linhaPerfil">
                        <h1>Número:</h1> <p>{props.número}</p>

                    </div>
                    <div className="linhaPerfil">
                        <h1>Endereço:</h1> <p>{props.nome}</p>
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
                    <p row="6" id="descricaoBox" name="descicao">{props.descrição}</p>
                </div>
            </div>
        </div>
    );
}


export default DadosPefil;