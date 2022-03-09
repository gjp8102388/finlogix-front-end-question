import {FETCH_WEBINAR_LIST_FAIL, FETCH_WEBINAR_LIST_REQUEST, FETCH_WEBINAR_LIST_SUCCESS} from "../constants/webinarConstants";
import IAction from "../interfaces/IAction";
import IWebinarListState from "../interfaces/IWebinarListState";

export const webinarListReducer = (state: IWebinarListState = {webinarList: []}, action: IAction) => {
    switch (action.type) {
        case FETCH_WEBINAR_LIST_REQUEST:
            return {loading: true}
        case FETCH_WEBINAR_LIST_SUCCESS:
            return {loading: false, webinarList: action.payload}
        case FETCH_WEBINAR_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}
