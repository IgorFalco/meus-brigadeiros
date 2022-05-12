import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import Frame from "../../components/Frame/Frame";
import "./Home.css";
import QuemSomos from "../../components/Quem_Somos/QuemSomos";

function Home() {
    return (
        <div>
            <Carrossel/>
            <Frame />
            <QuemSomos />

        </div>

    );
}

export default Home;