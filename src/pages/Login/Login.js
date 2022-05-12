import React from "react";
import "./Login.css"

function Login() {
    return (
        <div className="página">
            <div className="EsquerdaPagina">
                <div className="tituloLogin">
                    <h1>Entrar com e-mail</h1>
                </div>
                <div className="inputLogin">
                    <div className="inputEmail">
                        <label for="email"> Email</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div className="inputPass">
                        <label for="pass"> Senha
                            <input type="password" id="pass" />
                        </label>
                        
                    </div>

                    
                </div>
                <input type="submit" value="Entrar" id="entrarLogin"/>
                <div className="ou">
                    <hr id="barraEsquerda"></hr>
                    <h1>OU</h1>
                    <hr id="barraEsquerda"></hr>
                </div>

                <div className="naoPossuiConta">
                    <h1>Não possui uma conta?</h1>
                    <button>Increva-se agora</button>
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