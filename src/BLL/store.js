import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import testsReducer from "./Reducers/tests/tests-reducer";
import singleTestReducer from "./Reducers/tests/single-test-reducer";
import testProgressReducer from "./Reducers/tests/test-progress-reducer";
import usersReducer from "./Reducers/users/users-reducer";
import authUserReducer from "./Reducers/users/auth-user";

let reducers = combineReducers({
    testsPage: testsReducer,
    singleTestPage: singleTestReducer,
    progressPage: testProgressReducer,
    usersPage: usersReducer,
    authUser: authUserReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;