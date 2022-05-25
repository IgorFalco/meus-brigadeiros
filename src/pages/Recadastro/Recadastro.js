import React, { useState } from "react";
import { useHistory } from "react-router-dom"; 
import api from "../../services/api"
import "./Recadastro.css";

/*function comecar(){
    window.location.href="/home"
}*/

function Recadastro() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();
    const [número, setNúmero] = useState();
    const [descrição, setDescrição] = useState();
    const [confirmar, setConfirmar] = useState();
    const history = useHistory();

    async function cadastrar(e) {
        e.preventDefault();
        if (password === confirmar) {
      
            try {
                const response = await api.update('/cadastro', { nome, email, número, descrição, password});
                alert("Bem Vindo");
                

            } catch (error) {
                console.warn(error);
                alert(error.message);
            }
        } else {
            alert("Senhas incompatívies");
            window.location.href="/recadastro"
        }
        window.location.href="/home"
    };

    return (
        <div className="pagina">
            <div className="itens">
                <div className="Titulo">
                    <h1>Hora de editar!</h1>
                </div>
                <div className="retangulo">
                    <div className="campo">
                        <label>Nome:
                            <input type="text" placeholder="Seu Nome" onChange={(e) => setNome(e.target.value)} />
                        </label>
                    </div>

                    <div className="campo">
                        <label for="email">E-mail:
                            <input type="text" id="email" placeholder="*****@******.com.br" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="campo">
                        <label>Endereço:
                            <input type="text" placeholder="Rua/Logradouro" onChange={(e) => setNúmero(e.target.value)}/>
                        </label>
                    </div>

                    <div className="campop">
                        <label for="palavras">Se descreva com palavras mais doces... :</label>

                        <input type="text" id="palavras" className="palavras" onChange={(e) => setDescrição(e.target.value)} />
                    </div>


                    <div className="campo">
                        <label>Senha:
                            <input type="password" placeholder="*****" onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="campo">
                        <label>Confirmar a senha:
                            <input type="password" placeholder="*****" onChange={(e) => setConfirmar(e.target.value)} />
                        </label>
                    </div>
                    <div className="botao">
                        <button className="inscreva-se" onClick={cadastrar} > Confirme seus dados agora</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Recadastro;