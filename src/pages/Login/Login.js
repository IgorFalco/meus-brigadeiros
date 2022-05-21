import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"


function Login() {
    const[email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
   
     function login(){
    
       /* if(email ==="jonasneto@cpejr.com.br" && password === "senha"){*/
            history.push("home"); 
            alert("Bem vindo\n" + email); 
     
  /*  }

        else
        history.push("login");
        alert("Dados incorretos");*/
        
    }

    return (
        <div className="página">
            <div className="EsquerdaPagina">
                <div className="tituloLogin">
                    <h1>Entrar com e-mail</h1>
                </div>
                <div className="inputLogin">
                    <div className="inputEmail">
                        <label for="email"> Email</label>
                        <input type="email" 
                        id="email" 
                        placeholder="Email" 
                        onChange={(e)=>setEmail(e.target.value)}
                        >
                        </input>
                    </div>
                    <div className="inputPass">
                        <label for="pass"> Senha
                            <input type="password" id="pass"placeholder="Senha" 
                            onChange={(e)=>setPassword(e.target.value)} />
                        </label>
                        
                    </div>

                    
                </div>
                <input type="submit" value="Entrar" onClick={login} id="entrarLogin"/>
                <div className="ou">
                    <hr id="barraEsquerda"></hr>
                    <h1>OU</h1>
                    <hr id="barraEsquerda"></hr>
                </div>

                <div className="naoPossuiConta">
                    <h1>Não possui uma conta?</h1>
                    
                    <Link to="cadastro"> 
                        <button>
                          Inscreva-se agora
                        </button>
                    </Link>
                   
                </div>
            </div>

            <hr id="separadorMeio"/>
            <div className="DireitaPagina">
                <div className="tituloDireita">
                        <h1>SUA FELICIDADE COMEÇA AQUI</h1>
                </div>
                <div className="Logo">
                    <img src="/images/LogoLogin.png" alt="logo"></img>
                </div>
                <div className="subtituloLogin">
                    <h2>Que a nossa doçura seja contagiante</h2>
                </div>

            </div>
        </div>
    );
}

export default Login;