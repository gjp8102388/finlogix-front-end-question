import React, {useState} from "react";
import IWebinar from "../../interfaces/IWebinar";
import classes from "./WebinarCard.module.scss"
import moment from "moment"
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {dispatchToRegister, unFavWebinar} from "../../actions/webinarAction";
import {RootState} from "../../store";
import IUserState from "../../interfaces/IUserState";

interface Props {
    webinar: IWebinar,
    isFav: boolean,
    navScroll: Function
}

const WebinarCard = ({webinar, isFav, navScroll}: Props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector<RootState, IUserState>(
        (state: RootState) => state.userLogin
    )
    const [isSubmit, setIsSubmit] = useState(false);
    const {isLogin} = user;
    const handleRegister = () => {
        navScroll();
        dispatch(dispatchToRegister(webinar));
    }
    const handleUnRegister = async () => {
        setIsSubmit(true);
        await dispatch(unFavWebinar(webinar.id));
        window.alert('Your have unregistered from this webinar!');
        window.location.reload();
        return setIsSubmit(false);
    }
    const createdTime = moment().format("DD/MM/yyyy")
    const time = moment().add(10, 'days').format("YYYY/MM/DD hh:mm")
    const content = webinar.content ? webinar.content : '<p>No details available</p>';
    return (
        <div className={classes.container}>
            <div className={classes.createdAt}>
                {createdTime}
            </div>
            <div className={classes.title}>
                {webinar.title}
            </div>
            <div
                dangerouslySetInnerHTML={{__html: content}}
                className={classes.content}>
            </div>
            <div className={classes.time}>
                {time}
            </div>
            <div className={classes.buttonGroup}>
                {!isFav ? (<button disabled={isSubmit} className={classes.register} onClick={isLogin ? handleRegister : () => {
                    history.push('/login')
                }}>
                    Register Now
                </button>) : (
                    <button disabled={isSubmit} className={classes.register} onClick={handleUnRegister}>
                        Unregister
                    </button>
                )}

                <Link to={{
                    pathname: `/webinar/${webinar.id}`,
                    state: {
                        webinar: {webinar: webinar},
                    }
                }}>
                    <button className={classes.link}>
                        {'\u003E'}
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default WebinarCard
