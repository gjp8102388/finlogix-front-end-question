import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Webinars from "./pages/Webinars"
import Login from "./pages/Login";
// import "./App.css"
function App() {
  return (
    <Switch>
        <Route exact path="/" component={Webinars}/>
        <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
