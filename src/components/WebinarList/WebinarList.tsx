import React, {useEffect, useRef} from "react";
import {useFetch} from "../../cutomHooks/useFetch";
import {getPostList} from "../../utils/apiUtils";
import WebinarCard from "../WebinarCard/WebinarCard";
import IWebinar from "../../interfaces/IWebinar";
import classes from "./WebinarList.module.scss"
const WebinarList = ()=> {
    const {data:webinarList,loading} = useFetch(getPostList,[6,1],[],[])
    console.log(webinarList)
    return(
        <div className={classes.webinarList}>
        <div className={classes.container} >
            {!loading?
                webinarList.map(((webinar:IWebinar)=>(
                    <div className={classes.card} key={webinar.id}>
                    <WebinarCard webinar={webinar}/>
                    </div>
                ))):null}
        </div>
        </div>
    )
}
export default WebinarList;
