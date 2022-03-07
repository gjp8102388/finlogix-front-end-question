import React from 'react';
import classes from "./NavBar.module.scss"
import logo from "../../logo.svg"
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
const NavBar =()=>{
    const history = useHistory();
    const handleClick = ()=> {
        history.push('/login')
    }
    return(
        <div className={classes.container}>
            <img className={classes.logo} src={logo} alt={logo}/>
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
                <button className={classes.login} onClick={handleClick}>
                    Login
                </button>
                <button className={classes.logout}>
                    Logout
                </button>
            </div>

        </div>
    )
}
export default NavBar;
