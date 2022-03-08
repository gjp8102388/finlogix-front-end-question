import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {userLoginReducer} from "./reducers/userLoginReducer";

const reducers = combineReducers({
    userLogin: userLoginReducer,
})
const userInfoFromStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : undefined;
const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
} as {}
const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;

export type RootState = ReturnType<typeof store.getState>
