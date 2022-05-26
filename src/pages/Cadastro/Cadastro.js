import React, { useState } from "react"; 
import api from "../../services/api"
import "./Cadastro.css";

function Cadastro() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [nome, setNome] = useState();
    const [endereço, setEndereço] = useState();
    const [descrição, setDescrição] = useState();
    const [confirmar, setConfirmar] = useState();

    async function cadastrar(e) {
        e.preventDefault();
        if (password === confirmar)
        {
            try {
                await api.post('/cadastro', { nome, email, endereço ,descrição, password});
                alert("Bem Vindo");
                window.location.href="/home";

            } catch (error) {
                console.warn(error);
                alert("Por favor, verifique se todos os campos estão preenchidos corretamente!");
            }

        }else {
            alert("Senhas incompatívies");
        }
    };
    
    async function erros(e) {
    
        var Senha = document.getElementById("senha").value;
        var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[!@#$%*()_+^&}{:;?.]){1})(?!.*\s)[0-9a-zA-Z!@#$%;*(){}_+^&]*$/;
        
        if(Senha.length > 0)  {
            if(Senha.length < 6 || !regex.exec(Senha))
            {
            document.getElementById("parametros").innerHTML = ("A senha deve conter, no mínimo, 6 caracteres <br>A senha deve conter uma letra maiúscula <br>A senha deve conter um caracter especial")
            }
            else{
                document.getElementById("parametros").innerHTML = "";
            }
        }
        else
        {
            document.getElementById("parametros").innerHTML = "";
        }
        
    }   

    return (
        <div className="pagina1">
            <div className="itens1">

                <div className="Titulo1">
                    <h1>Cadastre-se</h1>
                </div>

                <div className="retangulo1">

                    <div className="campo1">
                        <label>Nome:
                            <input type="text" placeholder="   Seu Nome" onChange={(e) => setNome(e.target.value)} />
                        </label>
                    </div>

                    <div className="campo1">
                        <label for="email">E-mail:
                            <input type="text" id="email" placeholder="   *****@******.com.br" onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="campo1">
                        <label>Endereço:
                            <input type="text" placeholder="   Rua/Logradouro" onChange={(e) => setEndereço(e.target.value)}/>
                        </label>
                    </div>

                    <div className="campop1">
                        <label for="palavras">Descrição:
                        <input type="text" id="palavras" placeholder="   Use as palavras mais doces..." className="palavras" onChange={(e) => setDescrição(e.target.value)} />
                        </label>
                    </div>


                    <div className="campo1">
                        <label>Senha:
                            <input type="password" id= "senha" placeholder="   *****" onChange={(e) => setPassword(e.target.value)} onKeyUp={erros} />
                        </label>
                        <span id="parametros" className="parametros"></span>
                    </div>
                    <div className="campo1">
                        <label>Confirmar a senha:
                            <input type="password" placeholder="   *****" onChange={(e) => setConfirmar(e.target.value)} />
                        </label>
                    </div>
                    <div className="botao1">
                        <button className="inscreva-se1" onClick={cadastrar}> Inscreva-se agora</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cadastro;