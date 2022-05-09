import React from "react";
import Frame from "./Frame/Frame";
import Carousel from "./Carousel/Carousel";
import "./home.css"


function Home() {
    return(
        <div>
            <h1>Home</h1>
            <div className="mais-queridos">
            <Frame/>
            <div className="adoce-seu-dia">
                <Carousel/>

                
            </div>
        </div>
        </div>
    );
}

export default Home;