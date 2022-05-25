import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import api from "../../services/api"
import { Link } from "react-router-dom";
import "./Cadastro.css";

function Cadastro() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();
    const [endereço, setEndereço] = useState();
    const [descrição, setDescrição] = useState();
    const [confirmar, setConfirmar] = useState();
    const history = useHistory();

    async function cadastrar(e) {
        e.preventDefault();
        if (password === confirmar) {
      
            try {
                await api.post('/cadastro', { nome, email, endereço ,descrição, password});
                alert("Bem Vindo");
                window.location.href="/home";

            } catch (error) {
                console.warn(error);
                alert(error.message);
            }
        } else {
            alert("Senhas incompatívies");
        }
    };

    return (
        <div className="pagina">
            <div className="itens">
                <div className="Titulo">
                    <h1>Cadastre-se</h1>
                </div>
                <div className="retangulo">
                    <div className="campo">
                        <label>Nome:
                            <input type="text" placeholder="    Seu Nome" onChange={(e) => setNome(e.target.value)} />
                        </label>
                    </div>

                    <div className="campo">
                        <label for="email">E-mail:
                            <input type="text" id="email" placeholder="    *****@******.com.br" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="campo">
                        <label>Endereço:
                            <input type="text" placeholder="Rua/Logradouro" onChange={(e) => setEndereço(e.target.value)}/>
                        </label>
                    </div>

                    <div className="campop">
                        <label for="palavras">Se descreva com palavras mais doces... :</label>

                        <input type="text" id="palavras" className="palavras" onChange={(e) => setDescrição(e.target.value)} />
                    </div>


                    <div className="campo">
                        <label>Senha:
                            <input type="password" placeholder="    *****" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="campo">
                        <label>Confirmar a senha:
                            <input type="password" placeholder="    *****" onChange={(e) => setConfirmar(e.target.value)} />
                        </label>
                    </div>
                    <div className="botao">
                        <button className="inscreva-se" onClick={cadastrar}> Inscreva-se agora</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cadastro;