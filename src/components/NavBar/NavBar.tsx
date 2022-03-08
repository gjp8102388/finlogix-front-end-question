import React from 'react';
import classes from "./NavBar.module.scss"
import logo from "../../logo.svg"
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import IUserState from "../../interfaces/IUserState";
import {logout} from "../../actions/userAction";

const NavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userLogin = useSelector<RootState, IUserState>(
        (state: RootState) => state.userLogin
    )
    const {isLogin} = userLogin;
    const handleClick = () => {
        history.push('/login')
    }
    const handleLogout = async (event: any) => {
        event.preventDefault();
        await dispatch(logout());
        history.push('/')
    }
    return (
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
                {isLogin ? (<button className={classes.logout} onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <button className={classes.login} onClick={handleClick}>
                        Login
                    </button>)}
            </div>

        </div>
    )
}
export default NavBar;
