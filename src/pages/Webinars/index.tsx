import React, {useRef} from "react";
import Header from "../../components/Header/Header";
import WebinarList from "../../components/WebinarList/WebinarList";
import {useRouteMatch} from "react-router-dom";
import StaticInfo from "../../components/StaticInfo/StaticInfo";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import IWebinarListState from "../../interfaces/IWebinarListState";
import WebinarForm from "../../components/WebinarForm/WebinarForm";

const Webinars = () => {
    const data = useSelector<RootState, IWebinarListState>(
        (state: RootState) => state.webinarList
    )
    const {webinarList} = data;
    const path = useRouteMatch({
        path: "/registered"
    });
    const formRef = useRef<HTMLDivElement>(null);
    const navScroll = () => {
        formRef.current!.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <Header/>
            {path?.path === "/registered" ? <WebinarList navScroll={navScroll} favorited={1} isFav={true}/> : <WebinarList navScroll={navScroll} isFav={false} favorited={0}/>}
            <StaticInfo/>
            <div ref={formRef}>
                {path?.path === "/registered" ? null : (<WebinarForm webinarList={webinarList}/>)}
            </div>
        </>
    )
}
export default Webinars;
