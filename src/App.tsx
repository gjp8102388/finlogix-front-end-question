import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Webinars from "./pages/Webinars"
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import {PublicRoute} from "./utils/customRoutes";

function App() {
    return (
        <div className="container">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Webinars}/>
                <PublicRoute path="/login" component={Login}/>
            </Switch>
        </div>
    );
}

export default App;
