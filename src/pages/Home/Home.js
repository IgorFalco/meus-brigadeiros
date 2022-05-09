import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import "./Home.css";
import Frame from "./Frame/Frame";
import "./home.css"


function Home() {
    return(
        <div>
            <Carrossel></Carrossel>
            <h1>Home</h1>
            <div className="mais-queridos">
                <Frame/>
            </div>
        </div>

    );
}

export default Home;