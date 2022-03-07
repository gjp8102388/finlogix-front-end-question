import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import classes from "../Webinars/Webinars.module.scss"
import Header from "../../components/Header/Header";
import WebinarList from "../../components/WebinarList/WebinarList";
const Webinars = () => {
    return(
        <div className={classes.container}>
            <NavBar/>
            <Header/>
            <WebinarList/>
        </div>
    )
}
export default Webinars;
