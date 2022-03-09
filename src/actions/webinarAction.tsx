import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {RootState} from "../store";
import {AnyAction} from "redux";
import {
    DISPATCH_WEBINAR,
    FAV_WEBINAR_FAIL,
    FAV_WEBINAR_REQUEST,
    FAV_WEBINAR_SUCCESS,
    FETCH_WEBINAR_LIST_FAIL,
    FETCH_WEBINAR_LIST_REQUEST,
    FETCH_WEBINAR_LIST_SUCCESS,
    UNFAV_WEBINAR_FAIL,
    UNFAV_WEBINAR_REQUEST,
    UNFAV_WEBINAR_SUCCESS
} from "../constants/webinarConstants";
import {doFavPost, doUnFavPost, getPostList} from "../utils/apiUtils";
import IWebinar from "../interfaces/IWebinar";

export const fetchWebinarList = (favourited: number, per_page: number, page: number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        dispatch({
            type: FETCH_WEBINAR_LIST_REQUEST
        })
        const fetchRes = await getPostList(favourited, per_page, page);
        const data = fetchRes.data;
        dispatch({
            type: FETCH_WEBINAR_LIST_SUCCESS,
            payload: data.data,
        })
    } catch (error) {
        dispatch({
            type: FETCH_WEBINAR_LIST_FAIL,
            // @ts-ignore
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const favWebinar = (webinarId: string | number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        dispatch({
            type: FAV_WEBINAR_REQUEST
        })
        const res = await doFavPost(webinarId);
        dispatch({
            type: FAV_WEBINAR_SUCCESS
        })

    } catch (error) {
        dispatch({
            type: FAV_WEBINAR_FAIL,
            //@ts-ignore
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const unFavWebinar = (webinarId: string | number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        dispatch({
            type: UNFAV_WEBINAR_REQUEST
        })
        await doUnFavPost(webinarId);
        dispatch({
            type: UNFAV_WEBINAR_SUCCESS
        })
    } catch (error) {
        dispatch({
            type: UNFAV_WEBINAR_FAIL,
            //@ts-ignore
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
export const dispatchToRegister = (webinar: IWebinar): ThunkAction<void, RootState, unknown, AnyAction> => (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): void => {
    dispatch({
        type: DISPATCH_WEBINAR,
        payload: webinar
    })
}
