import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../constants/userConstants";
import IUserState from "../interfaces/IUserState";

interface Action {
    type: string,
    payload?: string
}

export const userLoginReducer = (state: IUserState = {userInfo: {}}, action: Action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true, isLogin: false}
        case USER_LOGIN_SUCCESS:
            return {loading: false, isLogin: true, user: action.payload}
        case USER_LOGIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT:
            return {isLogin: false}
        default:
            return state
    }
}
