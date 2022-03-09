import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Webinars from "./pages/Webinars"
import Login from "./pages/Login";
import NavBar from "./components/NavBar/NavBar";
import WebinarDetail from "./components/WebinarDetail/WebinarDetail";
import "./App.css"
import {PrivateRoute, PublicRoute} from "./utils/customRoutes";

function App() {
    return (
        <div className="container">
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Webinars}/>
                <PublicRoute path="/login" component={Login}/>
                <PrivateRoute path="/registered" component={Webinars}/>
                <Route path="/webinar/:id(\d+)" component={WebinarDetail}/>
            </Switch>
        </div>
    );
}

export default App;
