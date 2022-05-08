import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";
import Header from "./components/Header";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={UserMenu} />
            </Switch>
        </BrowserRouter>
    );

    function UserMenu() {
        return (
            <Header>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastro" component={Cadastro} />
                    <Route exact path="/perfil" component={Perfil} />
                    <Route exact path="/produtos" component={Produtos} />
                    <Route component={() => <Redirect to="home" />} />
                </Switch>
            </Header>
        )
    }
}

export default Routes;