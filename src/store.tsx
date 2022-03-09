import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userLoginReducer} from "./reducers/userLoginReducer";
import {webinarListReducer} from "./reducers/webinarListReducer";
import {webinarReducer} from "./reducers/webinarReducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
    webinarList: webinarListReducer,
    webinar: webinarReducer
})
const userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : undefined;
const initialState = {
    userLogin: {userInfo: userInfoFromStorage, isLogin: localStorage.getItem('token')},
} as {}
const middleware = [thunk]
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

export type RootState = ReturnType<typeof store.getState>
