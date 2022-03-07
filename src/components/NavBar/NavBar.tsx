import React from 'react';
import classes from "./Header.module.scss"
import logo from "../../logo.svg"
import {Link} from "react-router-dom";
const Header =()=>{
    return(
        <div className={classes.container}>
            <img src={logo} alt={logo}/>
            <div className={classes.navItems}>
                <div className={classes.item}>
                    Why ACY <i className={classes.arrow}/>
                </div>
                <div className={classes.item}>
                    Products <i className={classes.arrow}/>
                </div>
                <div className={classes.item}>
                    Platforms <i className={classes.arrow}/>
                </div>
                <div className={classes.item}>
                    Education <i className={classes.arrow}/>
                </div>
                <div className={classes.item}>
                    Partners <i className={classes.arrow}/>
                </div>
            </div>
            <div className={classes.buttons}>
                <button className={classes.login}>
                    Login
                </button>
                <button className={classes.logout}>
                    Logout
                </button>
            </div>

        </div>
    )
}
export default Header;
