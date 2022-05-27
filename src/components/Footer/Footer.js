import React from "react";
import "./Footer.css";

function cadastrar(){
    window.location.href="/cadastro"
}
function Footer() {
    function cadastrar() {
        window.location.href = "/cadastro"
    }
    return (
        <div className="footer">
            <div className="topo">
                <div className="elementos-topo">
                    <p>Receba as novidades em primeira mão. Cadastre-se</p>
                    <div className="cadastro">
                        <input className="seu-email"
                            placeholder="  Seu melhor email"
                            type="email">
                        </input>
                        <button className="botao-cadastro" onClick={cadastrar}>CADASTRAR</button>
                    </div>
                </div>
            </div>
            <div className="meio">
                <hr className="separador" />
                <div className="conteudos">
                    <div className="logoMeio">
                        <img src="/images/Logo_Footer.png" alt="meus brigadeiros"></img>
                    </div>
                    <div className="colunas">
                        <div className="coluna1">
                            <h2>Quem Somos</h2>
                            <a href="quemsomos" className="link">História</a>
                            <a href="quemsomos" className="link">Origem</a>
                        </div>
                        <div className="coluna2">
                            <h2>Nossos Produtos</h2>
                            <a href="produtos" className="link">Doces</a>
                            <a href="produtos" className="link">Bolos</a>
                            <a href="produtos" className="link">Donuts</a>
                        </div>
                        <div className="coluna3">
                            <h2>Contato</h2>
                            <a href="home" className="link">meusgranulados@gmail.com</a>
                            <a href="https://api.whatsapp.com/send?phone=5531995931173&text=Ol%C3%A1%2C%20como%20vai%3F%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20CPE." className="link">(31) 99593-1173</a>
                            <a href="https://www.instagram.com/cpe.jr" className="link">@meusgranulados</a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="baixo">
                <hr className="separador" />
                <div className="conteudosBaixo">
                    <div>
                        <h2 className="texto">© Meus Granulados 2022</h2>
                    </div>
                    <div className="redesSociais">
                        <a href="https://www.instagram.com/cpe.jr" className="link">
                            <img src="/images/Instagram.png" alt="instagram" />
                        </a>
                        <a href="https://www.facebook.com/cpejr/" className="link">
                            <img src="/images/Facebook.png" alt="facebook" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5531995931173&text=Ol%C3%A1%2C%20como%20vai%3F%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20CPE." className="link">
                            <img src="/images/Whatsapp.png" alt="wpp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;