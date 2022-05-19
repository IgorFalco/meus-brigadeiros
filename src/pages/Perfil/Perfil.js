import React from "react";
import "./Perfil.css"

function Perfil() {
    return (
        <div className="paginaCadastro">
            <div className="coluna-esquerda">
                <div className="boasvindas">
                    <h1>Ana</h1>
                    <p>, seja Bem Vindo (a) </p>
                </div>
                <img src="/images/PerfilRosto.jpg" alt="foto de perfil" id="perfil"></img>
                <input id="editarperfil" type="submit" value="Editar Perfil" />
                <div className="dados">
                    <div className="linhaPerfil">

                        <h1>Nome:</h1> <p>Ana Clara</p>
                    </div>
                    <div className="linhaPerfil">
                        <h1>Email:</h1> <p>anaclara@email.com.br</p>

                    </div>
                    <div className="linhaPerfil">
                        <h1>Número:</h1> <p>+55 31 12345-6789</p>

                    </div>
                    <div className="linhaPerfil">
                        <h1>Endereço:</h1> <p>Rua Doce, 123, Brigadeiro, Docelândia - MG</p>
                    </div>
                </div>
                <input id="logout" type="submit" value="Logout" />
            </div>
            <div className="coluna-direita">
                <div className="carroselteste">

                </div>
                <div className="textinhoTitulo">
                    <div className="labellabel">
                        <label id="descricao">Descrição</label>
                        <img src="/images/descricao.png" alt="descricao" />
                    </div>
                    <textarea row="6" id="descricaoBox" name="descicao" />
                </div>
            </div>
        </div>
    );
}

export default Perfil;