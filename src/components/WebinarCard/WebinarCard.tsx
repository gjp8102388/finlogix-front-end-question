import React from "react";
import IWebinar from "../../interfaces/IWebinar";
import classes from "./WebinarCard.module.scss"
import moment from "moment"

interface Props {
    webinar: IWebinar
}

const WebinarCard = (webinar: Props) => {
    const createdTime = moment().format("DD/MM/yyyy")
    const time = moment().add(10, 'days').format("YYYY/MM/DD hh:mm")
    const content = webinar.webinar.content ? webinar.webinar.content : '<p>No details available</p>';
    return (
        <div className={classes.container}>
            <div className={classes.createdAt}>
                {createdTime}
            </div>
            <div className={classes.title}>
                {webinar.webinar.title}
            </div>
            <div
                dangerouslySetInnerHTML={{__html: content}}
                className={classes.content}>
            </div>
            <div className={classes.time}>
                {time}
            </div>

        </div>
    )
}
export default WebinarCard
