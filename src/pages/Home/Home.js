import React from "react";
import Frame from "./Frame/Frame";
import "./home.css"


function Home() {
    return(
        <div>
            <h1>Home</h1>
            <div className="mais-queridos">
                <Frame/>
            </div>
        </div>

    );
}

export default Home;