import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userLoginReducer} from "./reducers/userLoginReducer";
import {login} from "./actions/userAction";

const reducers = combineReducers({
    userLogin: userLoginReducer,
})
const userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : undefined;
const isLogin = localStorage.getItem('token') ? true : false;
const initialState = {
    userLogin: {userInfo: userInfoFromStorage,isLogin: isLogin}
} as {}
const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

export type RootState = ReturnType<typeof store.getState>
