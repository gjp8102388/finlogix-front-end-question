import classes from "./WebinarDetail.module.scss"
import moment from "moment";

const WebinarDetail = (props: any) => {
    const {title, created_at, content} = props.location.state.webinar.webinar;
    const date = moment(created_at).format("DD/MM/yyyy")
    return (
        <div className={classes.container}>
            <div className={classes.title}>
                {title}
            </div>
            <div className={classes.createdAt}>
                {date}
            </div>
            <div className={classes.content} dangerouslySetInnerHTML={{__html: content}}/>
        </div>
    )

}
export default WebinarDetail;
