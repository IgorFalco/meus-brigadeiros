import React from "react";
import Carrossel from "../../components/Carrossel/Carrossel";
import App from "../../components/Carousel2/carousel2";
import Frame from "../../components/Frame/Frame";
import QuemSomos from "../../components/QuemSomos/QuemSomos"
import "./Home.css";

function Home() {
    return (
        <div>
            <Carrossel/>
            <Frame />
            <QuemSomos/>
            <App></App>
        </div>

    );
}

export default Home;