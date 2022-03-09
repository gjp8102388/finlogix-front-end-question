import React, {useEffect, useState} from "react";
import WebinarCard from "../WebinarCard/WebinarCard";
import IWebinar from "../../interfaces/IWebinar";
import classes from "./WebinarList.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import IWebinarListState from "../../interfaces/IWebinarListState";
import {fetchWebinarList} from "../../actions/webinarAction";

interface Props {
    favorited: number,
    isFav: boolean,
    navScroll: Function,
}

const WebinarList = ({favorited, isFav, navScroll}: Props) => {
    const dispatch = useDispatch();
    const data = useSelector<RootState, IWebinarListState>(
        (state: RootState) => state.webinarList
    )
    const [currentPage, setCurrentPage] = useState(1);
    const {loading, webinarList} = data;
    useEffect(() => {
        dispatch(fetchWebinarList(favorited, 6, 1));
    }, [dispatch])
    return (
        <>
            <div className={classes.webinarList}>
                <div className={classes.container}>
                    {!loading ?
                        webinarList.map(((webinar: IWebinar) => (
                            <div className={classes.card} key={webinar.id}>
                                <WebinarCard navScroll={navScroll} webinar={webinar} isFav={isFav}/>
                            </div>
                        ))) : null}
                </div>
            </div>
        </>
    )
}
export default WebinarList;
