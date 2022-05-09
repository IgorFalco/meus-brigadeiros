import React from "react";
import "./Header.css";
import Footer from "../Footer";

function Header(props) {
    return (
        <div className="base">
            <div className="header">
                <header className="elementos">
                    <div className="logobrigadeiros">
                        <a href="temp" className="links">
                            <img src="/images/Logo_Header.png" alt="logo" />
                        </a>
                    </div>
                    <div className="navbar">
                        <a href="home" className="links">Home</a>
                        <a href="produtos" className="links">Produtos</a>
                        <a href="quemsomos" className="links">Quem Somos?</a>
                        <a href="fidelidade" className="links">Fidelidade</a>
                        <div className="vetores">
                            <a href="perfil" className="icones">
                                <img src="/images/Perfil.png" alt="logo" />
                            </a>
                            <a href="perfil" className="icones">
                                <img src="/images/Favoritos.png" alt="logo" />
                            </a>
                            <a href="perfil" className="icones">
                                <img src="/images/Carrinho.png" alt="logo" />
                            </a>
                        </div>
                    </div>

                </header>
            </div>
            {props.children}
            <div>
                <Footer />
            </div>

        </div>


    );
}

export default Header;