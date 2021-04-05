import {actionTypes} from "../../Creators/ActionCreators";

const singleTestReducer = (state = {isFetching: true}, action) => {

    switch (action.type) {

        case actionTypes.SET_TEST:
            return {
                ...action.test
            }

        case actionTypes.SET_IS_FETCHING_SINGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export default singleTestReducer;