import React, { Fragment } from 'react';
import Background from './components/Background';

import {
    BrowserRouter as Router,
    Route, Switch, Redirect
} from "react-router-dom";

import S8gaming from "./pages/S8gaming";
import Minecraft from "./pages/Minecraft";
import SignUp from "./pages/SignUp";
import BadPage from "./pages/BadPage";

export default function PageRouter(){
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route exact path = "/" component = {S8gaming}/>
                    <Route exact path = "/minecraft" component = {Minecraft}/>
                    <Route exact path = "/signup" component = {SignUp}/>
                    <Route exact path = "/404" component = {BadPage}/>
                    <Redirect to="/404"/>
                </Switch>
            </Router>
            <Background/>
        </Fragment>
    )
}