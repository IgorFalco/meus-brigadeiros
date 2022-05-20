import React from "react";

function ReplaceIcon(id)
{
    if(document.getElementById(id).className === "botaofavorito")
        document.getElementById(id).className = "botaofavoritado";
    else document.getElementById(id).className = "botaofavorito";
}

export default ReplaceIcon;