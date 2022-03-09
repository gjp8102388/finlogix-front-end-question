import React from "react";
import classes from "./StaticInfo.module.scss"

const StaticInfo = () => {
    return (
        <div className={classes.container}>
            <div className={classes.infoContainer}>
                <div className={classes.title}>
                    Meet Your Host - Alistair Schultz
                </div>
                <div className={classes.content}>
                    <p>
                        With more than 15 years of experience covering both the
                        FX and CFD markets, Alistair has extensive knowledge
                        covering algorithmic trading, market analysis &
                        an impressive educational background.
                    </p>
                    <p>
                        As the author of ‘Essentials for Trading Students – An
                        Overview of the Basics for Aspiring Traders’, which was
                        released in 2017, Alistair will take any aspiring trader
                        from the basics right through to advanced analytics used
                        in institutional funds.
                    </p>
                    <p>
                        At the core of Alistair’s teachings is the ability to help each
                        trader uncover their ‘Trading DNA', helping them flourish with
                        the skills and timeframes that work best for them.
                    </p>
                </div>
            </div>
            <div className={classes.videoContainer}>
                <iframe className={classes.video} width="580" height="338" src="https://www.youtube.com/embed/Sn61Ix6DmiQ" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}
export default StaticInfo
