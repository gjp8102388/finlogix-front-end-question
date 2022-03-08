import React from "react";
import classes from "./Header.module.scss"

const Header = () => {
    return (
        <div className={classes.header}>
            <div className={classes.title}>
                Forex Webinars
            </div>
            <div className={classes.text}>
                <p>
                    Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader
                </p>
            </div>
        </div>
    )
}
export default Header
