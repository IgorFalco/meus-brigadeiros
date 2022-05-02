import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/home" component={Home} />
                <Route path="/perfil" component={Perfil} />
                <Route path="/produtos" component={Produtos} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;