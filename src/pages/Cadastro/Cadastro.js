import React from "react";
import "./Cadastro.css"
function Cadastro() {
    return (
        <div className="pagina">
            <div className="itens">
                <div className="Titulo">
                    <h1>Cadastre-se</h1>
                </div>
                <div className="retangulo">
                    <div className="campo">
                        <label>Nome:
                            <input type="text" />
                        </label>
                    </div>

                    <div className="campo">
                        <label for="email">E-mail:
                            <input type="text" id="email" />
                        </label>
                    </div>
                    <div className="campo">
                        <label>CEP:
                            <input type="text" />
                        </label>
                    </div>
                    <label for="palavras">Se descreva com palavras mais doces... :</label>

                    <input type="text" id="palavras" className="palavras" />

                    <div className="campo">
                        <label>Senha:
                            <input type="password" />
                        </label>
                    </div>
                    <div className="campo">
                        <label>Confirmar a senha:
                            <input type="password" />
                        </label>
                    </div>
                    <div className="botao">
                        <button className="inscreva-se"> Inscreva-se agora</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cadastro;