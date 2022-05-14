import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import Frame from "../../components/Frame/Frame";
import QuemSomos from "../../components/QuemSomos/QuemSomos"
import "./Home.css";

function Home() {
    return (
        <div>
            <Carrossel/>
            <Frame />
            <QuemSomos/>
        </div>

    );
}

export default Home;