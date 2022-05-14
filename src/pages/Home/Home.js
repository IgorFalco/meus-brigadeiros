import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import Frame from "../../components/Frame/Frame";
import Quem_somos from "../../components/Quem_somos"; 
import "./Home.css";
import QuemSomos from "../../components/Quem_Somos/QuemSomos";

function Home() {
    return (
        <div>
            <Carrossel/>
            <Frame />
            <Quem_somos/>
        </div>

    );
}

export default Home;