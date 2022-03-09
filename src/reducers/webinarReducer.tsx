import {DISPATCH_WEBINAR, FAV_WEBINAR_FAIL, FAV_WEBINAR_REQUEST, FAV_WEBINAR_SUCCESS, UNFAV_WEBINAR_FAIL, UNFAV_WEBINAR_REQUEST, UNFAV_WEBINAR_SUCCESS} from "../constants/webinarConstants";
import IAction from "../interfaces/IAction";
import IWebinarState from "../interfaces/IWebinarState";
import IWebinar from "../interfaces/IWebinar";

export const webinarReducer = (state: IWebinarState = {webinar: {} as IWebinar}, action: IAction) => {
    switch (action.type) {
        case FAV_WEBINAR_REQUEST:
            return {loading: true}
        case FAV_WEBINAR_SUCCESS:
            return {loading: false}
        case FAV_WEBINAR_FAIL:
            return {loading: false, error: action.payload}
        case UNFAV_WEBINAR_REQUEST:
            return {loading: true}
        case UNFAV_WEBINAR_SUCCESS:
            return {loading: false}
        case UNFAV_WEBINAR_FAIL:
            return {loading: false, error: action.payload}
        case DISPATCH_WEBINAR:
            return {webinar: action.payload}
        default:
            return state
    }
}
