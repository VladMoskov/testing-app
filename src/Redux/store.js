import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk';
import testsReducer from "./tests-reducer";
import singleTestReducer from "./single-test-reducer";
import testProgressReducer from "./test-progress-reducer";

let reducers = combineReducers({
    testsPage: testsReducer,
    singleTestPage: singleTestReducer,
    progressPage: testProgressReducer
});

let store = createStore(reducers, applyMiddleware(thunk));


window.state=store.getState()
export default store;