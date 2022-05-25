import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Perfil from "./pages/Perfil";
import Favoritos from "./pages/Favoritos";
import Header from "./components/Header";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { isAuthenticated } from "./services/auth";



const PrivateRoute = ({ component: Component, ...rest }) => {
    return (

        <Route {...rest} render={(props) =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            )
        } />
    );
};


function Routes() {
    return (
        <BrowserRouter>
            <Header>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/cadastro" component={Cadastro} />
                    <Route exact path="/produtos" component={Produtos} />
                    <Route exact path="/favoritos" component={Favoritos} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/" component={UserMenu} />
                </Switch>
            </Header>
        </BrowserRouter>
    );

    function UserMenu() {
        return (
            <Switch>
                <PrivateRoute exact path="/perfil" component={Perfil} />
                <Route component={() => <Redirect to="/login" />} />
            </Switch>
        )
    }
}

export default Routes;