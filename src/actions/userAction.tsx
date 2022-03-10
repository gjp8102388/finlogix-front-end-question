import {USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT} from "../constants/userConstants";
import ILogin from "../interfaces/ILogin";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {RootState} from "../store";
import {doLogin, doLogout} from "../utils/apiUtils";

export const login = ({email, password}: ILogin): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const loginResponse = await doLogin({email, password});
        const data = loginResponse.data;
        const userData = {id: data.user.id, name: data.user.name}
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('token', data.token);
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: userData,
        })
    } catch (error:any) {
        //user login fail
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> => async (dispatch: ThunkDispatch<RootState, unknown, AnyAction>): Promise<void> => {
    try {
        dispatch({
            type: USER_LOGOUT
        })
        await doLogout();
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    } catch (error) {
        console.log(error);
    }
}
